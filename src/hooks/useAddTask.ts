import { useEffect, useState } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";
import { useCommands } from "./useCommands";
import { getBaseSpeakOptions } from "../helpers/getBaseSpeakOptions";
export function useAddTask() {
  const [weeklyTasks, setWeeklyTasks] = useState<weeklyTasks>({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });
  const { speak, voices, cancel } = useSpeechSynthesis();
  const baseSpeakOptions = getBaseSpeakOptions(voices);

  const commands = useCommands(
    setWeeklyTasks,
    speak,
    baseSpeakOptions,
    weeklyTasks,
  );

  const { transcript, resetTranscript, finalTranscript } = useSpeechRecognition(
    {
      commands,
    },
  );
  useEffect(() => {
    resetTranscript();
  }, [finalTranscript, resetTranscript]);
  return { weeklyTasks, transcript, speak, baseSpeakOptions, cancel };
}
