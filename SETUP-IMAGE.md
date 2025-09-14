# How to Add Your Profile Image

## Step 1: Save Your Image
1. Save the profile image you shared as `profile-image.jpg`
2. Place it in the `public` folder of your project
3. The path should be: `public/profile-image.jpg`

## Step 2: Image Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 400x400px or larger (square aspect ratio works best)
- **Quality**: High resolution for crisp display

## Step 3: Alternative Method
If you prefer a different image name:
1. Save your image in the `public` folder with any name
2. Update the `src` path in `src/components/Hero.tsx` line with your image name
3. Example: Change `/profile-image.jpg` to `/your-image-name.jpg`

## Current Setup
✅ The code is already configured to use your professional photo
✅ Circular frame with professional styling
✅ Responsive sizing (smaller on mobile, larger on desktop)
✅ Optimized with Next.js Image component
✅ Fallback to "SD" initials if image doesn't load

## Result
Your professional photo will appear as a circular profile picture with:
- White border and shadow for professional look
- Floating animation for subtle movement
- Green status indicator showing "online"
- Perfect integration with the dark hero background