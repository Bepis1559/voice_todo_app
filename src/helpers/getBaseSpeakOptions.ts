export function getBaseSpeakOptions(voices: SpeechSynthesisVoice[]) {
  return {
    voice: voices[2],
    rate: 0.75,
    pitch: 0.1,
  };
}
