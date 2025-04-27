import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export interface GiftCardProps {
  amount: number;
  image: string;
  description: string;
}

const GiftCard = ({ amount, image, description }: GiftCardProps) => {
  return (
    <Card className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={`Подарочная карта ${amount} руб.`}
          className="object-cover w-full h-full hover:scale-105 apple-transition"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{amount.toLocaleString('ru-RU')} ₽</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-apple-black hover:bg-black text-white">
          Купить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GiftCard;
