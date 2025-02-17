import { type Command } from "react-speech-recognition";

export function generateSpecificCommand(
  day: string,
  callback: (voiceInput: string) => void,
  commandWord?: string,
): Command {
  const specificCommand: Command = {
    command: `${day} ${commandWord ?? ""} *`,
    callback,
  };
  return specificCommand;
}
