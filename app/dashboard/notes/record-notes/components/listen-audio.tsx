"use client"
import { Mic } from "lucide-react";

export default function ListenAudio() {
  const handleMicClick = () => {
    // Add logic to play audio or start recording here
    console.log("Mic clicked!");
    const audio = new Audio("/path/to/your/audio/file.mp3");
    audio.play();
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={handleMicClick}
        className=" "
      >
        <Mic className="w-4 h-4 text-indigo-600" />
      </button>
    </div>
  );
}
