# Artist Portfolio Website

A modern, responsive portfolio website for digital artists built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful, production-ready design
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 🖼️ Portfolio gallery with category filtering
- 📧 Contact form with validation
- 🎯 SEO optimized

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd artist-portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
# or
npm start
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` or `npm start` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── FeaturedArtwork.tsx
│   ├── Bio.tsx
│   ├── Footer.tsx
│   └── ArtworkModal.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Portfolio.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── context/            # React Context providers
│   └── PortfolioContext.tsx
├── data/               # Static data
│   ├── portfolioData.ts
│   └── servicesData.ts
├── types/              # TypeScript type definitions
│   └── index.ts
└── App.tsx             # Main app component
```

## Customization

### Adding New Artwork

Edit `src/data/portfolioData.ts` to add new artwork entries:

```typescript
{
  id: 'unique-id',
  title: 'Artwork Title',
  description: 'Artwork description',
  imageUrl: 'https://example.com/image.jpg',
  category: '2D Animations', // or 'NFT Art', '2D Game Animations', 'Storyboard Art'
  year: 2024,
  tools: ['Photoshop', 'After Effects'],
  price: 500,
  isNFT: false // set to true for NFT artworks
}
```

### Modifying Services

Edit `src/data/servicesData.ts` to update service offerings.

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying Tailwind classes in components
2. Updating `tailwind.config.js` for custom theme settings
3. Adding custom CSS in `src/index.css`

## Deployment

### Netlify (Recommended)

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service.

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.