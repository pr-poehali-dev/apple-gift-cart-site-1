import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-32">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in [animation-delay:200ms] opacity-0">
              Подарочные карты Apple Gift
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in [animation-delay:400ms] opacity-0">
              Идеальный подарок для тех, кто ценит инновации и качество Apple
            </p>
            <div className="animate-fade-in [animation-delay:600ms] opacity-0">
              <Link to="/products">
                <Button className="bg-apple-black hover:bg-black text-white rounded-full px-8 py-6 text-base">
                  Выбрать карту <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-apple-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
              Преимущества Apple Gift карт
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="flex justify-center mb-5">
                  <div className="bg-white rounded-full p-5 inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Удобство использования</h3>
                <p className="text-gray-600">
                  Карты активируются в течение нескольких минут после покупки и приходят на электронную почту
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-5">
                  <div className="bg-white rounded-full p-5 inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Универсальность</h3>
                <p className="text-gray-600">
                  Используйте для покупок в App Store, iTunes Store, Apple Music и других сервисах Apple
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-5">
                  <div className="bg-white rounded-full p-5 inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Безопасность</h3>
                <p className="text-gray-600">
                  Защищенные платежи и гарантия подлинности каждой карты
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Готовы приобрести подарочную карту?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              Выберите номинал карты и завершите покупку всего за несколько шагов
            </p>
            <Link to="/products">
              <Button className="bg-apple-black hover:bg-black text-white rounded-full px-8 py-6 text-base">
                Выбрать карту <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
