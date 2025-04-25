'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useEffect, useState } from 'react';
import Popup from './popup/popup';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayoutRoutes = ['/login/', '/signup'];

  const shouldHideLayout = hideLayoutRoutes.includes(pathname);
  const [isPopupOpen, setIsPopupOpen] = useState(true)

 
  useEffect(() => {
    setIsPopupOpen(true);
  }, [pathname]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen)
  }
  return (
    <div className="flex min-h-screen flex-col">
      {!shouldHideLayout && <Header />}
      <main className="flex-1">{children}</main>
      {!shouldHideLayout && <Footer />}
      <Popup isOpen={isPopupOpen} onClose={togglePopup} />
    </div>
  );
}
