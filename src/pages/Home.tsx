import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { FirewoodKitchen } from '../components/FirewoodKitchen';
import { ChaatSection } from '../components/ChaatSection';
import { SeatingExperience } from '../components/SeatingExperience';
import { KitchenSegregation } from '../components/KitchenSegregation';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { MenuSection } from '../components/MenuSection';
import { Gallery } from '../components/Gallery';
import { BlogSection } from '../components/BlogSection';

export const Home: React.FC = () => {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <About />
      <FirewoodKitchen />
      <ChaatSection />
      <SeatingExperience />
      <KitchenSegregation />
      <WhyChooseUs />
      <MenuSection />
      <Gallery />
      <BlogSection />
    </main>
  );
};
