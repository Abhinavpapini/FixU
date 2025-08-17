# FixU - Professional Home Services Platform

FixU is a comprehensive home services platform built with Next.js that connects customers with professional service providers across India. The platform offers a wide range of services including plumbing, electrical, electronics, AC services, maintenance, and home care.

![FixU Logo](./public/FixULogo.jpg)

## 🚀 Features

### Customer Features
- **Service Booking**: Easy online booking with real-time scheduling
- **User Authentication**: Secure registration and login system
- **Service Categories**: Multiple service categories (Plumbing, Electrical, Electronics, AC Services, Maintenance, Home Care)
- **Payment Integration**: Secure payments via Razorpay
- **Order Tracking**: Track service requests and order history
- **User Profile**: Manage personal information and service history

### Admin Features
- **Admin Dashboard**: Comprehensive admin panel with statistics
- **User Management**: View and manage registered users
- **Service Management**: Add, edit, and manage services
- **Order Management**: Track and manage customer orders
- **Analytics**: Dashboard with user, service, and order statistics

### Technical Features
- **Responsive Design**: Mobile-first responsive design using Tailwind CSS
- **Real-time Updates**: Dynamic content updates
- **SEO Optimized**: Server-side rendering with Next.js
- **Email Notifications**: Automated email confirmations using Nodemailer
- **Secure Authentication**: JWT-based authentication with bcrypt password hashing

## 🛠 Technology Stack

### Frontend
- **Next.js 15.3.0** - React framework with server-side rendering
- **React 19.0.0** - Frontend library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### Backend
- **Node.js** - Runtime environment
- **Next.js API Routes** - Backend API endpoints
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication & Security
- **JWT (jsonwebtoken)** - Token-based authentication
- **bcryptjs** - Password hashing
- **Jose** - JWT verification library

### Payment & Communication
- **Razorpay** - Payment gateway integration
- **Nodemailer** - Email service

## 📁 Project Structure

```
proj/
├── app/                          # Next.js app directory
│   ├── admin/                    # Admin panel pages
│   │   ├── components/           # Admin-specific components
│   │   └── page.tsx             # Admin dashboard
│   ├── api/                     # API routes
│   │   ├── admin/               # Admin API endpoints
│   │   ├── auth/                # Authentication endpoints
│   │   ├── orders/              # Order management
│   │   ├── payment/             # Payment processing
│   │   └── services/            # Service management
│   ├── components/              # Reusable UI components
│   ├── services/                # Service category pages
│   └── [pages]/                 # Various app pages
├── contexts/                    # React Context providers
├── lib/                         # Utility libraries
├── models/                      # MongoDB data models
├── public/                      # Static assets
└── middleware.ts                # Next.js middleware
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database
- Razorpay account for payments
- Email service credentials

### 1. Clone the Repository
```bash
git clone <repository-url>
cd proj
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory with the following variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key

# Email Configuration
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

# Razorpay Payment Gateway
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Admin Credentials
EMAIL=admin@fixu.in
PASS=your_admin_password
```

### 4. Database Setup
Ensure your MongoDB database is running and accessible via the connection string provided in `MONGODB_URI`.

### 5. Run the Development Server
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Setup
- Set up all environment variables in your production environment
- Ensure MongoDB is accessible from your production server
- Configure Razorpay webhooks for payment verification
- Set up email service for production use

## 📊 Data Models

### User Model
```typescript
{
  name: string;
  email: string;
  password: string; // bcrypt hashed
  phone?: string;
  address?: string;
  isAdmin?: boolean;
  orders: IOrder[];
  createdAt: Date;
  updatedAt: Date;
}
```

### Service Model
```typescript
{
  title: string;
  type: string;
  description: string;
  active: boolean;
  category: string;
  price?: string;
  items: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

### Order Model
```typescript
{
  serviceId?: ObjectId;
  serviceName: string;
  serviceProvider: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  scheduledDate: Date;
  price: number;
  address: string;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  customerNotes?: string;
  paymentId?: string;
  createdAt: Date;
}
```

## 🔐 Authentication Flow

1. **User Registration**: Users can register with email and password
2. **User Login**: Authentication via JWT tokens stored in both localStorage and HTTP-only cookies
3. **Admin Access**: Special admin credentials with elevated privileges
4. **Token Validation**: Automatic token validation on protected routes
5. **Session Management**: Persistent sessions with token refresh

## 💳 Payment Integration

The platform uses Razorpay for secure payment processing:

1. **Order Creation**: Service orders are created with calculated pricing
2. **Payment Gateway**: Razorpay payment modal integration
3. **Payment Verification**: Server-side payment verification
4. **Order Confirmation**: Email confirmations sent upon successful payment

## 📧 Email Notifications

Automated email notifications are sent for:
- Service booking confirmations
- Payment confirmations
- Order status updates
- Account registration

## 🎨 UI/UX Features

- **Dark Theme**: Modern black and orange color scheme
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Dynamic forms and modals
- **Loading States**: User-friendly loading indicators
- **Toast Notifications**: Real-time feedback messages

## 🔒 Security Features

- **Password Hashing**: bcrypt for secure password storage
- **JWT Authentication**: Secure token-based authentication
- **HTTP-only Cookies**: Secure token storage
- **Input Validation**: Server-side input validation
- **CORS Protection**: Cross-origin request protection

## 📱 Available Services

1. **Plumbing Services** - Pipe repairs, installations, leak fixing
2. **Electrical Services** - Wiring, repairs, installations
3. **Electronics** - Appliance repairs and maintenance
4. **AC Services** - Air conditioning installation and servicing
5. **Maintenance** - General home maintenance services
6. **Home Care** - Cleaning and household services

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and inquiries:
- **Email**: support@fixu.in
- **Phone**: +91 8888 888 888
- **WhatsApp**: +91 8888 888 888

## 🔮 Future Enhancements

- [ ] Real-time chat support
- [ ] Mobile app development
- [ ] GPS tracking for service providers
- [ ] Rating and review system
- [ ] Multi-language support
- [ ] Service provider onboarding portal
- [ ] Advanced analytics dashboard
- [ ] Push notifications

---

Built with ❤️ using Next.js, TypeScript, and MongoDB
