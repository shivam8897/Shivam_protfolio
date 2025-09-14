# Shivam Dubey - Modern Portfolio

A beautiful, modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS showcasing my skills and achievements as a Senior Data Engineer.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance**: Built with Next.js 14 for optimal performance
- **Animations**: Smooth scroll animations and hover effects
- **Glass Morphism**: Modern glass effect UI components
- **TypeScript**: Full type safety
- **SEO Optimized**: Meta tags and structured data

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Install Node.js** (if not already installed):
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version` and `npm --version`

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Build & Deploy

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Deploy to Vercel:
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Experience.tsx       # Experience section
│   ├── Projects.tsx         # Projects section
│   ├── Skills.tsx           # Skills section
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer component
```

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#3b82f6',  // Change primary color
    600: '#2563eb',
  },
  // Add more colors
}
```

### Content
Update your information in the respective component files:
- Personal info: `src/components/Hero.tsx`
- About section: `src/components/About.tsx`
- Experience: `src/components/Experience.tsx`
- Projects: `src/components/Projects.tsx`
- Skills: `src/components/Skills.tsx`
- Contact: `src/components/Contact.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **SEO**: Built-in SEO optimization
- **Analytics Ready**: Easy to add Google Analytics

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

- **Email**: shivamdubey012@gmail.com
- **LinkedIn**: [shivam-dubey012](https://www.linkedin.com/in/shivam-dubey012/)
- **GitHub**: [shivam8897](https://github.com/shivam8897)

---

Built with ❤️ by Shivam Dubey
