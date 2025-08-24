import Features from "@/components/home/features";
import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <Hero />

        <Features />
      </main>
    </div>
  );
};

export default HomePage;
