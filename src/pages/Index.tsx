
import ElectricServiceLinks from "@/components/ElectricServiceLinks";
import LocationMap from "@/components/LocationMap";
import VideoGallery from "@/components/VideoGallery";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Услуги электрика в Колпино
      </h1>
      
      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        <ElectricServiceLinks />
        <LocationMap />
        <VideoGallery />
      </div>
    </div>
  );
}
