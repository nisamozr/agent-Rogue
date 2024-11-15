import { AUDIOS, IMAGES } from "@/assets";

const StaticScreen = () => {
  return (
    <div className="absolute w-full h-full  top-0 left-0">
      <img
        src={IMAGES.img_static}
        alt=""
        className="w-full h-full object-cover"
      />
      <audio autoPlay={true} loop={true}>
        <source src={AUDIOS.audio_static} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default StaticScreen;
