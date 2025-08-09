
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  useEffect(() => {
    // Scroll to top when component mounts (page navigation)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [title]); // Re-run when title changes (different page)

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <div className="pt-20 pb-12 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Page Content */}
      <main className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
