import Uploader from "../components/uploader";
import Files from "../components/files";

function Home() {
  return (
    <div className="w-screen h-[100dvh] flex flex-col space-y-8 items-center justify-center">
      <Uploader />
      <Files />
    </div>
  );
}

export default Home;
