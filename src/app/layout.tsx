import React, { ReactNode } from 'react';

export interface Metadata {
  title: string;
  description: string;
  openGraph: {
    title?: string;
    description?: string;
    images?: string[] | { url: string; width?: number; height?: number; alt?: string }[];
    type?: string;
  };
}

export const metadata: Metadata = {
  title: 'Confitness | Tu cuerpo es la única máquina que necesitas',
  description:
    'Entrenamiento de fuerza y calistenia desde casa. Construye masa muscular sin pisar un gimnasio.',
  openGraph: {
    title: 'Confitness | Tu cuerpo es la única máquina que necesitas',
    description:
      'Entrenamiento de fuerza y calistenia desde casa. Construye masa muscular sin pisar un gimnasio.',
    images: [
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop',
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#FAFAFA] antialiased selection:bg-[#CCFF00] selection:text-[#0C0C0C]">
      {children}
    </div>
  );
}
