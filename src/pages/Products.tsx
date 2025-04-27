import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GiftCard from "@/components/GiftCard";

const Products = () => {
  const giftCards = [
    {
      amount: 1000,
      image: "https://images.unsplash.com/photo-1607582544904-45ab5d7d8c55?q=80&w=800&auto=format&fit=crop",
      description: "Идеально подходит для покупки приложений, игр или подписки на Apple Music."
    },
    {
      amount: 2500,
      image: "https://images.unsplash.com/photo-1611174340587-7cf549bb0e13?q=80&w=800&auto=format&fit=crop",
      description: "Отличный выбор для приобретения популярных игр или месячной подписки на Apple One."
    },
    {
      amount: 5000,
      image: "https://images.unsplash.com/photo-1587825045385-39f56afbb038?q=80&w=800&auto=format&fit=crop",
      description: "Оптимальный вариант для покупки многих игр или годовой подписки на сервисы Apple."
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Подарочные карты Apple Gift
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-16">
              Выберите подходящий номинал для себя или в качестве подарка
            </p>
            
            {/* Gift Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {giftCards.map((card, index) => (
                <GiftCard
                  key={index}
                  amount={card.amount}
                  image={card.image}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-apple-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Что можно купить за подарочную карту?
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-3 inline-flex shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-.38l.045-.013M9 5l7.5 7.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Приложения и игры</h3>
                    <p className="text-gray-600">
                      Тысячи приложений и игр в App Store для iPhone, iPad и Mac.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-3 inline-flex shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-.38l.045-.013M9 5l7.5 7.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Подписки на сервисы</h3>
                    <p className="text-gray-600">
                      Apple Music, Apple TV+, Apple Arcade, iCloud+ и Apple One.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-3 inline-flex shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-.38l.045-.013M9 5l7.5 7.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Книги и аудиокниги</h3>
                    <p className="text-gray-600">
                      Книги, аудиокниги и учебники в Apple Books.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
