import Navigation from '@/components/Navigation';
import CaseStudies from '@/components/CaseStudies';
import Footer from '@/components/Footer';

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;