
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LocationMap = () => {
  return (
    <Card className="w-full mx-auto shadow-md">
      <CardHeader className="bg-amber-50">
        <CardTitle className="text-center text-blue-800">Карта услуг в Колпино</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32044.07396365285!2d30.557490366796865!3d59.75083870000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696330100be4b93%3A0xe1f8acb58aaf29e0!2z0JrQvtC70L_QuNC90L4sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz!5e0!3m2!1sru!2sru!4v1719088153965!5m2!1sru!2sru"
            title="Карта Колпино"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="mt-2 text-sm text-center text-gray-700">
          Оказываем услуги электрика на всей территории Колпино и в ближайших районах
        </p>
      </CardContent>
    </Card>
  );
};

export default LocationMap;
