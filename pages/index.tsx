import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Player from "../components/Player";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen  lg:h-[140vh]">
      <Head>
        <title>Joms & Maja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative pb-24">
        <div
          className="relative bg-gradient-to-b 
    from-gray-900/10 to-[#010511]  lg:pl-16 h-[65vh] md:h-[95vh]"
        >
          <div className="absolute top-0 -z-10 left-0 h-[65vh] md:h-[95vh] w-screen">
            <Image
              src={`https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/237037732_4904252662934866_7714880928040623700_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGb_g53iddCCEOiK9Zy5sLWFBI586Uvq9MUEjnzpS-r07zlj1rRxlah3WNJaDQ582rQQ35s77K805vQJzGyV7Di&_nc_ohc=aOUlDpOLEWoAX8fs_5k&_nc_ht=scontent.fmnl17-3.fna&oh=00_AT9JWgqoiEzKZQajW-OpDL19SLsIkTaSb3rDDPpI-VJTQA&oe=62D2102F`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute m-auto left-0 right-0 text-center bottom-5 md:bottom-20 max-w-xs lg:max-w-2xl">
            <p className="font-Cormorant text-shadow-md text-white text-2xl lg:text-4xl md:text-3xl">
              SAVE THE DATE
            </p>
            <p className="font-Caveat text-shadow-md text-white text-6xl lg:text-9xl md:text-7xl">
              Joms & Maja
            </p>
            <p className="font-Cormorant text-shadow-md text-white text-2xl lg:text-5xl md:text-4xl">
              10.05.2022
            </p>
          </div>
        </div>
        <div>
          <Player />
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center"></footer>
    </div>
  );
};

export default Home;
