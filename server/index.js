import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Enhanced CORS configuration
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://saravana-kumar-2023.github.io/Portfolio/',
    'https://saravana-kumar-2023.github.io'
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.options('*', cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Email configuration with better error handling
const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER || 'saravanakumar092003@gmail.com';
  const emailPass = process.env.EMAIL_PASS || 'pwen kjnc rlqx obrs';
  
  console.log('Email configuration:', {
    user: emailUser,
    passConfigured: emailPass !== 'pwen kjnc rlqx obrs'
  });

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};


// Test email configuration on startup
const testEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email configuration is valid');
    return true;
  } catch (error) {
    console.log('⚠️  Email configuration issue:', error.message);
    console.log('📧 Please check your .env file and Gmail app password');
    return false;
  }
};

// Contact form endpoint with enhanced error handling
app.post('/contact', async (req, res) => {
  console.log('📨 Contact form submission received:', req.body);
  
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log('❌ Validation failed: Missing required fields');
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Validation failed: Invalid email format');
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Check if email is configured
    const emailUser = process.env.EMAIL_USER || 'your-email@gmail.com';
    const emailPass = process.env.EMAIL_PASS || 'your-app-password';
    
    if (emailUser === 'your-email@gmail.com' || emailPass === 'your-app-password') {
      console.log('⚠️  Email not configured properly');
      return res.status(200).json({
        success: true,
        message: 'Message received! (Email configuration needed for actual sending)'
      });
    }

    const transporter = createTransporter();

    // Email content for you (notification)
    const notificationMailOptions = {
      from: emailUser,
      to: process.env.NOTIFICATION_EMAIL || emailUser,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #8B5CF6, #3B82F6); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Contact</h1>
            <p style="color: #E5E7EB; margin: 10px 0 0 0;">Someone reached out through your portfolio!</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #374151; margin-top: 0; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">Contact Details</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #8B5CF6;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #8B5CF6;">Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong style="color: #8B5CF6;">Subject:</strong> ${subject}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
              <div style="background: #F3F4F6; padding: 15px; border-radius: 8px; border-left: 4px solid #8B5CF6;">
                <p style="margin: 0; line-height: 1.6; color: #374151;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB; text-align: center;">
              <p style="color: #6B7280; font-size: 14px; margin: 0;">
                This message was sent from your portfolio contact form<br>
                <strong>Timestamp:</strong> ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #6B7280; font-size: 12px;">
              © 2025 Saravana Kumar Portfolio - Automated Email Notification
            </p>
          </div>
        </div>
      `
    };

    // Confirmation email for the sender
    const confirmationMailOptions = {
      from: emailUser,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #8B5CF6, #3B82F6); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
            <p style="color: #E5E7EB; margin: 10px 0 0 0;">Your message has been received</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #374151; margin-top: 0;">Message Confirmation</h2>
            
            <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
              Hi ${name},<br><br>
              Thank you for reaching out through my portfolio! I've received your message about "<strong>${subject}</strong>" and I appreciate you taking the time to contact me.
            </p>
            
            <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; border-left: 4px solid #8B5CF6; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Your Message:</h3>
              <p style="color: #374151; margin: 0; line-height: 1.6;">${message}</p>
            </div>
            
            <p style="color: #374151; line-height: 1.6;">
              I'll review your message and get back to you as soon as possible. In the meantime, feel free to check out my other projects or connect with me on social media.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <div style="margin-bottom: 10px;">
                <a href="https://github.com/Saravana-kumar-2023" style="display: inline-block; background: linear-gradient(135deg, #8B5CF6, #3B82F6); color: white; padding: 15px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                  View My GitHub
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/saravana-kumar2909/" style="display: inline-block; background: linear-gradient(135deg, #3B82F6, #1D4ED8); color: white; padding: 15px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
              <p style="color: #6B7280; font-size: 14px; margin: 0;">
                Best regards,<br>
                <strong style="color: #8B5CF6;">Saravana Kumar</strong><br>
                Full Stack Java Developer
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #6B7280; font-size: 12px;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
          </div>
        </div>
      `
    };

    // Send both emails
    console.log('📧 Sending emails...');
    await Promise.all([
      transporter.sendMail(notificationMailOptions),
      transporter.sendMail(confirmationMailOptions)
    ]);

    console.log('✅ Emails sent successfully');
    res.status(200).json({
      success: true,
      message: 'Message sent successfully! You will receive a confirmation email shortly.'
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running!', 
    timestamp: new Date().toISOString(),
    port: PORT
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Saravana Kumar Portfolio API',
    endpoints: {
      health: '/api/health',
      contact: 'POST contact'
    }
  });
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Testing email configuration...`);
  await testEmailConfig();
  console.log(`✅ Backend ready for contact form submission`);
});