import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Newsletter subscription
export async function subscribeToNewsletter(email) {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email, subscribed_at: new Date().toISOString() }])
    .select()

  if (error) {
    if (error.code === '23505') { // Unique constraint violation
      throw new Error('This email is already subscribed')
    }
    throw error
  }

  return data
}

// Service request submission
export async function submitServiceRequest(requestData) {
  const { data, error } = await supabase
    .from('service_requests')
    .insert([{
      name: requestData.name,
      email: requestData.email,
      service_type: requestData.service_type,
      message: requestData.message,
      created_at: new Date().toISOString()
    }])
    .select()

  if (error) throw error
  return data
}

// Get all blog posts
export async function getBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('published_at', { ascending: false })

  if (error) throw error
  return data
}

// Search functionality
export async function searchContent(query) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
    .limit(10)

  if (error) throw error
  return data
}
