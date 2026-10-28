import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Philosophy } from '@/components/Philosophy';
import { Stats } from '@/components/Stats';
import { MethodologySteps } from '@/components/MethodologySteps';
import { Programs } from '@/components/Programs';
import { TargetAudience } from '@/components/TargetAudience';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { LeadCapture } from '@/components/LeadCapture';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#0C0C0C] text-[#FAFAFA] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Philosophy />
      <Stats />
      <MethodologySteps />
      <Programs />
      <TargetAudience />
      <Testimonials />
      <FAQ />
      <LeadCapture />
      <Footer />
    </main>
  );
}
