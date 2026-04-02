import { NextResponse } from 'next/server'
import { submitServiceRequest } from '@/lib/supabase'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, service_type, message } = body

    // Validation
    if (!name || !email || !service_type || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    await submitServiceRequest(body)

    return NextResponse.json(
      { message: 'Service request submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Service request error:', error)
    
    return NextResponse.json(
      { error: 'Failed to submit request. Please try again.' },
      { status: 500 }
    )
  }
}
