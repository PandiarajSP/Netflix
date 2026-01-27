interface VideoTitleProps {
  title: string;
  overview: string;
}
const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="w-screen pt-[12%] px-36 absolute text-white aspect-video bg-linear-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 pt-10 text-lg">{overview}</p>
      <div>
        <button className="text-lg bg-white p-5 w-40 mt-5 font-bold text-black rounded-lg hover:bg-white/50 ">
          ▶ Play
        </button>
        <button className="text-lg bg-white p-5 mx-2 mt-5 text-black font-bold rounded-lg hover:bg-white/50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
