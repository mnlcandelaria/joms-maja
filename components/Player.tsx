import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

function Player() {
  const [track, setTrack] = useState(14);
  const musicTracks = [
    {
      name: "Memories",
      src: "https://www.bensound.com/bensound-music/bensound-memories.mp3",
    },
    {
      name: "Creative Minds",
      src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
    },
    {
      name: "Acoustic Breeze",
      src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    },
    {
      name: "Sunny",
      src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    },
    {
      name: "Tenderness",
      src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3",
    },
    {
      name: "Once Again",
      src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3",
    },
    {
      name: "Sweet",
      src: "https://www.bensound.com/bensound-music/bensound-sweet.mp3",
    },
    {
      name: "Love",
      src: "https://www.bensound.com/bensound-music/bensound-love.mp3",
    },
    {
      name: "Piano Moment",
      src: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3",
    },
    {
      name: "E.R.F",
      src: "https://www.bensound.com/bensound-music/bensound-erf.mp3",
    },
    {
      name: "Dreams",
      src: "https://www.bensound.com/bensound-music/bensound-dreams.mp3",
    },
    {
      name: "A Day To Remember",
      src: "https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music",
    },
    {
      name: "Adventure",
      src: "https://www.bensound.com/bensound-music/bensound-adventure.mp3",
    },
    {
      name: "Photo Album",
      src: "https://www.bensound.com/bensound-music/bensound-photoalbum.mp3",
    },
    {
      name: "November",
      src: "https://www.bensound.com/bensound-music/bensound-november.mp3",
    },
  ];

  const audioEnded = () => {
    if (track < musicTracks.length - 1) {
      setTrack((prev) => prev + 1);
    } else {
      setTrack(0);
    }
  };

  return (
    <div className="p-5 md:p-10">
      <p className="ml-5">
        <span className="text-gray-500">Now Playing:</span>{" "}
        <span className="font-bold">{musicTracks[track].name}</span>
      </p>
      <ReactAudioPlayer
        src={musicTracks[track].src}
        autoPlay
        onEnded={audioEnded}
        controls
      />
    </div>
  );
}

export default Player;