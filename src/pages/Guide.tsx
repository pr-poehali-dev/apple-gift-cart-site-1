import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Guide = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Как использовать Apple Gift карту
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-16">
              Простая инструкция по активации и использованию ваших подарочных карт
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="pb-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-16">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0 flex items-start">
                    <div className="h-12 w-12 rounded-full bg-apple-black text-white flex items-center justify-center text-xl font-semibold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Покупка карты</h3>
                    <p className="text-gray-600 mb-6">
                      Выберите подходящий номинал карты (1000 ₽, 2500 ₽ или 5000 ₽) и оформите заказ через наш сайт. 
                      После успешной оплаты вы получите электронное письмо с кодом карты.
                    </p>
                    <div className="bg-apple-gray rounded-lg p-6">
                      <p className="text-sm text-gray-600">
                        <strong>Совет:</strong> Если вы покупаете карту в подарок, вы можете переслать это электронное письмо 
                        получателю или распечатать код и подарить его в красивой открытке.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0 flex items-start">
                    <div className="h-12 w-12 rounded-full bg-apple-black text-white flex items-center justify-center text-xl font-semibold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Активация карты</h3>
                    <p className="text-gray-600 mb-6">
                      Чтобы активировать карту, войдите в свою учетную запись Apple ID на устройстве Apple. 
                      Перейдите в App Store, нажмите на свой профиль, выберите "Пополнить счет" и введите код карты.
                    </p>
                    <div className="bg-apple-gray rounded-lg p-6">
                      <p className="text-sm text-gray-600">
                        <strong>Важно:</strong> Код карты чувствителен к регистру. Вводите его точно так, как он указан в письме.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0 flex items-start">
                    <div className="h-12 w-12 rounded-full bg-apple-black text-white flex items-center justify-center text-xl font-semibold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Использование средств</h3>
                    <p className="text-gray-600 mb-6">
                      После активации карты средства будут добавлены на ваш счет Apple ID. 
                      Вы можете использовать их для покупки приложений, игр, музыки, фильмов, 
                      книг и подписок на сервисы Apple (Apple Music, Apple TV+, iCloud и др.).
                    </p>
                    <div className="bg-apple-gray rounded-lg p-6">
                      <p className="text-sm text-gray-600">
                        <strong>Примечание:</strong> Средства на вашем счете Apple ID не имеют срока действия и будут доступны до тех пор, 
                        пока вы не израсходуете их.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-apple-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Часто задаваемые вопросы
            </h2>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              <div className="py-6">
                <h3 className="text-xl font-medium mb-3">Можно ли вернуть или обменять карту?</h3>
                <p className="text-gray-600">
                  Подарочные карты не подлежат возврату или обмену после покупки, согласно условиям использования Apple.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-xl font-medium mb-3">Есть ли срок действия у подарочной карты?</h3>
                <p className="text-gray-600">
                  Нет, подарочные карты Apple не имеют срока действия. Вы можете активировать их в любое время.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-xl font-medium mb-3">Можно ли использовать карту за пределами России?</h3>
                <p className="text-gray-600">
                  Подарочные карты привязаны к региону, в котором они были приобретены. 
                  Российские карты можно использовать только с российской учетной записью Apple ID.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Guide;
