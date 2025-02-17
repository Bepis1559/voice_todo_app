import { instructionsSummary, introSpeech } from "../data/phrases";

export function getSpeechButtons() {
  const speechButtons: speechButton[] = [
    {
      text: introSpeech,
      buttonText: "Get started",
      shouldEnableListening: false,
    },
    {
      text: "Listening for tasks",
      buttonText: "Start listening for tasks",
      shouldEnableListening: true,
    },
    {
      text: instructionsSummary,
      buttonText: "Read instructions summary",
      shouldEnableListening: false,
    },
    {
      text: "Listening stopped",
      buttonText: "Stop listening for tasks",
      shouldEnableListening: false,
    },
  ];

  return speechButtons;
}
