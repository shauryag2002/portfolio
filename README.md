# 🚀 Shaurya Gupta - Portfolio Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)

A beautiful, responsive portfolio website showcasing my journey as a **Software Engineer** and **Full Stack Developer**. Built with modern web technologies and optimized for performance.

[🌐 **Live Demo**](https://shauryag2002.github.io/portfolio/) • [📧 **Contact Me**](mailto:guptashaurya2002@gmail.com) • [💼 **LinkedIn**](https://linkedin.com/in/shauryag2002)

</div>

---

## ✨ Features

### 🎨 **Modern Design & UX**

- **Responsive Design**: Seamlessly adapts to all devices (mobile, tablet, desktop)
- **Smooth Animations**: CSS transitions, hover effects, and scroll animations
- **Interactive Navigation**: Smart header with smooth scroll-to-section functionality
- **Professional Layout**: Clean, modern aesthetic with gradient backgrounds
- **Profile Photo Integration**: High-quality professional photos with hover effects

### ⚡ **Performance & Technology**

- **Next.js 15**: Latest framework with Turbopack for blazing fast performance
- **TypeScript**: Full type safety and enhanced developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Image Optimization**: Next.js Image component with automatic optimization
- **SEO Optimized**: Proper metadata, semantic HTML, and search engine friendly

### 🎯 **Interactive Components**

- **Dynamic Header**: Transparent to solid transition on scroll with mobile hamburger menu
- **Hero Section**: Professional photo with animated call-to-action buttons
- **Enhanced About**: Three-column layout with large profile photo and decorative elements
- **Project Showcase**: Interactive cards with hover effects and external links
- **Contact Form**: Functional form with mailto integration
- **Scroll-to-Top**: Smooth scrolling button appears on scroll
- **404 Page**: Custom error page with navigation options

---

## 🚀 **Getting Started**

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Git** ([Download](https://git-scm.com/))

### 🔧 **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/shauryag2002/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### 🏗️ **Build for Production**

```bash
# Build the application
npm run build

# Start production server
npm start

```

---

## 📋 **Portfolio Sections**

### 🏠 **Hero Section**

- **Professional Photo**: High-quality profile image (`shaurya.jpg`) with hover effects
- **Introduction**: Name, title, and professional summary
- **Contact Info**: Location and phone number
- **Social Links**: Direct links to GitHub, LinkedIn, and email
- **Call-to-Action**: Prominent contact and portfolio buttons

### 👨‍💻 **About Me**

- **Enhanced Layout**: Three-column layout with large profile photo
- **Professional Story**: Detailed background and experience
- **Quick Facts**: Highlighted achievements and statistics
- **Decorative Elements**: Visual enhancements with gradient backgrounds
- **Profile Integration**: Professional photo with decorative elements

### 💼 **Experience**

**Current Position: SDE-1 at 4 Way Technologies (Aug 2024 - Present)**

- Developed Chatreal app with **4k+ downloads** (Android & iOS)
- Created **3D character animations** using react-three-fiber
- Reduced app crashes through **performance optimization**
- Implemented dynamic themes with **Redux state management**

**Previous: Full Stack Developer Intern at H3A Business Solutions (Apr - Jul 2023)**

- Built projects with **React.js, Node.js, MongoDB**
- Integrated **payment gateways** (Razorpay, PayU Money)
- Improved performance by **25%** through optimization
- Enhanced database queries reducing response times by **20%**

### 🚀 **Featured Projects**

<table>
<tr>
<td>

**Chatreal**

- 3D AI Character App
- 4k+ Downloads
- React Native + Expo
- [Android](https://play.google.com/store/search?q=chatreal) • [iOS](https://apps.apple.com/us/app/chatreal-3d-character-ai-bot/id6717603008) • [Website](https://chatreal.ai)

</td>
<td>

**real-time-monaco**

- Collaborative Code Editor
- 900+ NPM Downloads
- Monaco Editor + Yjs
- [NPM](https://npmjs.com/package/real-time-monaco) • [GitHub](https://github.com/shauryag2002/real-time-monaco) • [Demo](https://real-time-monaco.vercel.app/)

</td>
</tr>
<tr>
<td>

**generate-apk**

- Android APK Generator
- NPM Package
- JavaScript + Node.js
- [NPM](https://npmjs.com/package/generate-apk) • [GitHub](https://github.com/shauryag2002/generate-apk)

</td>
<td>

**Joy Of Tails & Parallaxplay**

- E-commerce & Interactive Apps
- Production Ready
- React.js + Node.js
- [Joy Of Tails](https://joyoftailsweb.onrender.com/) • [Parallaxplay](https://parallaxplay-73gc.onrender.com/)

</td>
</tr>
</table>

### 🛠️ **Skills & Technologies**

**Languages**: TypeScript, JavaScript, Python, SQL, HTML, CSS
**Frontend**: React.js, Next.js, Redux, Recoil, Tailwind CSS
**Backend**: Node.js, Express.js, MongoDB, PostgreSQL, Prisma
**Mobile**: React Native, Expo, Android Studio, Xcode
**Tools**: Docker, Firebase, Git, Cloudinary, Digital Ocean, Sentry

### 📞 **Contact**

- **Interactive Form**: Validated contact form with mailto integration
- **Direct Links**: Phone, email, and social media connections
- **Professional Info**: Location and availability details

---

## 🎨 **Customization Guide**

### 🖼️ **Adding Your Profile Photo**

The portfolio is designed to use your profile photo (`shaurya.jpg`) in two main sections:

1. **Hero Section**: Circular profile photo with hover effects
2. **About Section**: Large rectangular photo with decorative elements

**Photo Requirements:**

- **Format**: JPG/PNG
- **Hero Section**: 512x512px (square, will be made circular)
- **About Section**: 512x640px (portrait orientation recommended)
- **Quality**: High resolution for crisp display on all devices
- **File Name**: `shaurya.jpg` (or update import paths in components)

**Location**: Place your photo in the `public/` folder as `shaurya.jpg`

### 🎨 **Colors & Styling**

The portfolio uses a professional blue-based color scheme:

```css
/* Primary Colors */
--primary-blue: #2563eb
--primary-purple: #7c3aed
--gradient-from: #dbeafe
--gradient-to: #e0e7ff
```

**To customize colors:**

- Edit Tailwind classes in components (`bg-blue-600`, `text-blue-600`, etc.)
- Update gradient classes (`from-blue-50 to-indigo-100`)
- Modify hover effects and transitions

### 📝 **Content Updates**

Update personal information in these files:

- `components/Hero.tsx` - Name, title, description, contact info
- `components/About.tsx` - Personal story and achievements
- `components/Experience.tsx` - Work experience and accomplishments
- `components/Projects.tsx` - Project details and links
- `components/Contact.tsx` - Contact information and form
- `app/layout.tsx` - SEO metadata and page titles

---

## 📈 **Performance Features**

- **Next.js Image Optimization**: Automatic image optimization and lazy loading
- **Turbopack**: Ultra-fast bundling and hot reload
- **Code Splitting**: Automatic code splitting for optimal loading
- **CSS Optimization**: Tailwind CSS purging and minification
- **SEO Optimization**: Meta tags, semantic HTML, and sitemap

### 📊 **Lighthouse Scores**

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

---

## 🎯 **Key Highlights**

- ✅ **Professional Photo Integration**: Real profile photos in Hero and About sections
- ✅ **Mobile-First Design**: Fully responsive across all devices
- ✅ **Performance Optimized**: Next.js 15 with Turbopack
- ✅ **SEO Ready**: Proper meta tags and structured data
- ✅ **Interactive Elements**: Smooth scrolling, hover effects, animations
- ✅ **Contact Integration**: Functional contact form with email integration
- ✅ **Project Showcase**: Live links to real projects and GitHub repositories
- ✅ **Professional Experience**: Detailed work history with achievements
- ✅ **Skills Display**: Comprehensive technical skills overview
- ✅ **Social Integration**: Direct links to LinkedIn, GitHub, and email

---

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

---

## 📞 **Contact & Support**

<div align="center">

**Shaurya Gupta**  
Software Engineer & Full Stack Developer

📧 [guptashaurya2002@gmail.com](mailto:guptashaurya2002@gmail.com)  
📱 [+91-997-143-92-46](tel:+919971439246)  
📍 New Delhi, India

[![GitHub](https://img.shields.io/badge/GitHub-shauryag2002-black?style=for-the-badge&logo=github)](https://github.com/shauryag2002)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-shauryag2002-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/shauryag2002)
[![Portfolio](https://img.shields.io/badge/Portfolio-shauryagupta.dev-green?style=for-the-badge&logo=vercel)](https://shauryag2002.github.io/portfolio/)

</div>

---

## 🙏 **Acknowledgments**

- **Design Inspiration**: Modern portfolio trends and best practices
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful, consistent icons
- **Framework**: [Next.js](https://nextjs.org/) for the amazing React framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for rapid UI development
- **Deployment**: [Vercel](https://vercel.com/) for seamless deployment experience

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Shaurya Gupta](https://github.com/shauryag2002)

</div>
