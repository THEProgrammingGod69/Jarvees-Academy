# JARVEES INFOTECH Website

A professional website for JARVEES INFOTECH, showcasing their IT training and solutions services. Built with Vue 3, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design with professional blue/gray color scheme
- Component-based architecture for easy maintenance and updates
- Firebase integration for contact form submissions
- Comprehensive pages: Home, About, Training, Solutions, and Contact
- Reusable UI components for consistent styling

## Project Structure

- `src/views/` - Page components (Home, About, Training, Solutions, Contact)
- `src/components/` - Reusable components
  - `ui/` - UI components (Button, Card, Section, Hero, ServiceCard)
  - `Navbar.vue` - Site navigation
  - `Footer.vue` - Site footer
- `src/firebase/` - Firebase configuration and services
- `src/router/` - Vue Router configuration
- `src/assets/` - Static assets like images

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up Firebase:
   - Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Enable Authentication and Firestore services
   - Copy your Firebase configuration
   - Create a `.env` file based on `.env.example` and add your Firebase configuration

### Development

Start the development server:

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## UI Components

The project includes several reusable UI components:

### Button

```vue
<Button variant="primary" size="md">Click Me</Button>
```

Variants: `primary`, `secondary`, `accent`, `outline`, `text`  
Sizes: `sm`, `md`, `lg`

### Card

```vue
<Card title="Card Title" variant="hover">
  Card content goes here
</Card>
```

Variants: `default`, `hover`, `feature`

### Section

```vue
<Section title="Section Title" subtitle="Section subtitle" background="gray" :centered="true">
  Section content
</Section>
```

Backgrounds: `white`, `gray`, `primary`, `accent`

### Hero

```vue
<Hero title="Welcome" subtitle="Hero subtitle" size="default">
  <template #buttons>
    <Button to="/contact">Contact Us</Button>
  </template>
</Hero>
```

Sizes: `small`, `default`, `large`

### ServiceCard

```vue
<ServiceCard 
  title="Service Title" 
  description="Service description"
  :features="['Feature 1', 'Feature 2']"
  buttonText="Learn More"
  buttonLink="/services"
>
</ServiceCard>
```

## Firebase Integration

The project uses Firebase for:

1. **Contact Form Submissions**: Form data is stored in Firestore
2. **Authentication**: Ready for implementing user authentication if needed

To enable Firebase functionality:

1. Update the Firebase configuration in `.env` file
2. Uncomment the Firebase code in the ContactView component

## Customization

### Colors

The color scheme is defined in `tailwind.config.js` and includes:

- Primary: Deep blue (#1a365d)
- Secondary: Gray (#718096)
- Accent: Bright blue (#4299e1)

Modify these colors to match your brand requirements.

### Content

Update the content in each view component to reflect your business information.
