
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Video = {
  id: string;
  title: string;
};

const VideoGallery = () => {
  // Примеры видео с YouTube об электрике
  const videos: Video[] = [
    { id: "4YWbk-zCCd8", title: "Основы электрики для начинающих" },
    { id: "s_AfhYC6X-E", title: "Как заменить розетку своими руками" },
    { id: "iU1FoKBhUHo", title: "Безопасность при работе с электричеством" }
  ];

  return (
    <Card className="w-full mx-auto shadow-md">
      <CardHeader className="bg-amber-50">
        <CardTitle className="text-center text-blue-800">Видеоролики по электрике</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="mt-2 text-sm font-medium text-center">{video.title}</h3>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoGallery;
