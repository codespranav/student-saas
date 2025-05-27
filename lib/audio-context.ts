let audioContext: AudioContext | null = null;

export async function getAudioContext(): Promise<AudioContext> {
  if (typeof window === "undefined") {
    throw new Error("Audio context is only available in the browser");
  }

  try {
    if (!audioContext) {
      const AudioContextConstructor =
        window.AudioContext || (window as any).webkitAudioContext;
      audioContext = new AudioContext();
    }

    // resume the audio if it is in suspended state
    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }

    return audioContext;
  } catch (error) {
    console.error("Failed to get AudioContext:", error);
    throw error;
  }
}


export function closeAudioContext(){
    if(audioContext){
        audioContext.close().catch(console.error);
        audioContext = null;
    }
}

// Add a utility functions to check if the audio context is available and active
export function isAudioContextAvailable(): boolean {
  return !!audioContext && audioContext.state !== "running";
}