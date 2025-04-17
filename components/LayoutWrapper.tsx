'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayoutRoutes = ['/login', '/register'];

  const shouldHideLayout = hideLayoutRoutes.includes(pathname);

  return (
    <div className="flex min-h-screen flex-col">
      {!shouldHideLayout && <Header />}
      <main className="flex-1">{children}</main>
      {!shouldHideLayout && <Footer />}
    </div>
  );
}
