import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { name, email, message } = await req.json()
    
    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" }, 
        { status: 400 }
      )
    }
    
    // Validate email format (simple regex check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" }, 
        { status: 400 }
      )
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Format the current time
    const currentTime = new Date().toLocaleString('en-US', { 
      hour: 'numeric', 
      minute: 'numeric',
      hour12: true,
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    // Configure email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "ashputhusseri@gmail.com",
      subject: `New Contact Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Time: ${currentTime}
Message: ${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 5px;">
  <h2 style="color: #3b82f6; margin-bottom: 20px;">New Contact Form Message</h2>
  
  <div style="margin-bottom: 15px;">
    <p style="margin: 5px 0; font-weight: bold;">From:</p>
    <p style="margin: 5px 0;">${name}</p>
  </div>
  
  <div style="margin-bottom: 15px;">
    <p style="margin: 5px 0; font-weight: bold;">Email:</p>
    <p style="margin: 5px 0;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
  </div>
  
  <div style="margin-bottom: 15px;">
    <p style="margin: 5px 0; font-weight: bold;">Time:</p>
    <p style="margin: 5px 0; color: #6b7280;">${currentTime}</p>
  </div>
  
  <div style="margin-bottom: 15px;">
    <p style="margin: 5px 0; font-weight: bold;">Message:</p>
    <p style="margin: 5px 0; white-space: pre-line;">${message}</p>
  </div>
  
  <hr style="border: 0; height: 1px; background-color: #eaeaea; margin: 20px 0;" />
  
  <p style="color: #6b7280; font-size: 14px; text-align: center;">This message was sent from your portfolio contact form.</p>
</div>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    // Return success response
    return NextResponse.json(
      { message: "Email sent successfully" }, 
      { status: 200 }
    )
  } catch (error) {
    console.error("Failed to send email:", error)
    
    // Return detailed error for debugging
    return NextResponse.json(
      { 
        error: "Failed to send email", 
        details: error instanceof Error ? error.message : String(error)
      }, 
      { status: 500 }
    )
  }
} 