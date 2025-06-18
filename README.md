# Saravana Kumar - Portfolio Website

A modern 3D portfolio website built with React, Three.js, and Node.js backend for contact form functionality.

## Features

- 🎨 Modern 3D animations with Three.js and React Three Fiber
- 📱 Fully responsive design
- 🌙 Dark theme with beautiful gradients
- 📧 Contact form with email notifications
- ⚡ Smooth animations with Framer Motion
- 🎯 Optimized performance

## Tech Stack

### Frontend
- React 18 with TypeScript
- Three.js & React Three Fiber for 3D graphics
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons

### Backend
- Node.js with Express
- Nodemailer for email functionality
- CORS for cross-origin requests

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Gmail account for email functionality

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Configure your email settings in `.env`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NOTIFICATION_EMAIL=your-notification-email@gmail.com
```

### Email Setup (Gmail)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password in `EMAIL_PASS`

### Running the Application

#### Development Mode
```bash
# Run both frontend and backend
npm run dev:full

# Or run separately:
# Frontend (http://localhost:5173)
npm run dev

# Backend (http://localhost:3001)
npm run server
```

#### Production Build
```bash
npm run build
npm run preview
```

## Contact Form Features

- ✅ Real-time form validation
- ✅ Loading states and error handling
- ✅ Email notifications to your inbox
- ✅ Confirmation emails to senders
- ✅ Beautiful HTML email templates
- ✅ Responsive form design

## API Endpoints

- `POST /api/contact` - Send contact form message
- `GET /api/health` - Server health check

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   └── main.tsx
├── server/
│   └── index.js
├── package.json
└── README.md
```

## Customization

### Personal Information
Update the following files with your information:
- `src/components/Contact.tsx` - Contact details
- `src/components/Hero.tsx` - Name and introduction
- `src/components/About.tsx` - About section content
- `src/components/Projects.tsx` - Your projects
- `src/components/Education.tsx` - Educational background

### Email Templates
Customize email templates in `server/index.js`:
- Notification email (sent to you)
- Confirmation email (sent to form submitters)

## Performance Optimizations

- Optimized 3D animations to prevent lag
- Lazy loading of 3D components
- Efficient animation timing
- Reduced particle counts for better performance
- Responsive design for all devices

## Deployment

### Frontend
Deploy to Vercel, Netlify, or any static hosting service:
```bash
npm run build
```

### Backend
Deploy to Heroku, Railway, or any Node.js hosting service.

Make sure to set environment variables in your hosting platform.

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

MIT License - feel free to use this code for your own portfolio.