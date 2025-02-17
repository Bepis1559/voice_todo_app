import { instructionsSummary, introSpeech } from "../data/phrases";

export function getSpeechButtons() {
  const speechButtons: speechButton[] = [
    {
      textToRead: introSpeech,
      buttonText: "Get started",
    },
    {
      textToRead: "Listening for tasks",
      buttonText: "Start listening",
    },
    {
      textToRead: instructionsSummary,
      buttonText: "Read instructions summary",
    },
  ];

  return speechButtons;
}
