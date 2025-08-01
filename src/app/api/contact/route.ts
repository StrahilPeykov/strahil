import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  company?: string
  subject: string
  message: string
  recaptchaToken?: string
}

// Verify reCAPTCHA token (optional)
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  if (!secretKey || !token) return true // Skip if not configured
  
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`
    })
    
    const data = await response.json()
    return data.success && data.score > 0.5 // Adjust score as needed
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, company, subject, message, recaptchaToken } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Verify reCAPTCHA if token provided
    if (recaptchaToken && !(await verifyRecaptcha(recaptchaToken))) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: 'Contact Form <contact@strahil.dev>', // Use your verified domain
      to: ['strahil.peykov@gmail.com'],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            ${company ? `<p style="margin: 0 0 10px 0;"><strong>Company:</strong> ${company}</p>` : ''}
            <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; font-size: 14px; color: #1e40af;">
              <strong>Reply directly to this email</strong> to respond to ${name}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
            <p>Sent from strahil.dev contact form on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
Subject: ${subject}

Message:
${message}

---
Sent from strahil.dev contact form on ${new Date().toLocaleString()}
Reply directly to this email to respond to ${name}.
      `
    })

    console.log('Email sent successfully:', emailData.data?.id)

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      id: emailData.data?.id
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    // Handle Resend-specific errors
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle preflight OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}