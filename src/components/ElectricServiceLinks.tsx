
import { Link } from "@/components/ui/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

type ServiceLink = {
  title: string;
  url: string;
};

const ElectricServiceLinks = () => {
  const links: ServiceLink[] = [
    { title: "Электрик Колпино (народ.ру)", url: "https://elektrik-kolpino.narod.ru" },
    { title: "Электрик Колпино (bos.ru)", url: "http://elektrikkolpino.bos.ru" },
    { title: "Электрик Колпино (сервис)", url: "https://colpino-electric-service.poehali.dev" },
    { title: "Видео-сайт электрика", url: "https://elektrik-sait-video.poehali.dev" },
    { title: "Аниме проект электрика", url: "https://anime-electrics-project.poehali.dev" },
    { title: "Сайт электрика Колпино", url: "https://kolpino-electric-site.poehali.dev" },
    { title: "Минималистичный сайт электрика", url: "https://minimal-electric-site.poehali.dev" },
    { title: "Сайт освещения Колпино", url: "https://kolpino-lightning-site.poehali.dev" },
    { title: "Электрик Колпино (альт.)", url: "https://kolpino-electric-site-1.poehali.dev/" }
  ];

  return (
    <Card className="w-full mx-auto shadow-md">
      <CardHeader className="bg-amber-50">
        <CardTitle className="text-center text-blue-800">Полезные ресурсы электрика</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index} className="flex items-center">
              <ExternalLink className="w-4 h-4 mr-2 text-blue-600" />
              <Link 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ElectricServiceLinks;
