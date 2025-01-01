import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'video - meeting',
  description: 'Video Meeting App',
  icons: {
    icon: '/icons/testlogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: 'iconButton',
            // logoImageUrl: '@/public/icons/testlogo.png',
          },
          variables: {
            colorText: '#fff',
            colorPrimary: '#A020F0',
            colorBackground: '#1C1F2E',
            colorInputBackground: '#252A41',
            colorInputText: '#fff',
          },
          elements: {
            logoImage: {
              width: '120px', // Adjust the width as needed
              height: 'auto', // Maintain aspect ratio
            },
          },
        }}
      >
        <body className={`${inter.className} bg-dark-4`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
