import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AdiJey Engineering Solutions (OPC) Pvt. Ltd.',
  description: 'One Stop Engineering Solutions Provider generating value and driving high performance. [cite: 6]' 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 font-sans antialiased min-h-screen flex flex-col`}>
        
        

        <main >
          {children}
          <WhatsAppButton />
        </main>

        

        
      </body>
    </html>
  );
}