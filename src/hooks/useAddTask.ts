import { useEffect, useMemo, useState } from "react";
import SpeechRecognition, {
  type Command,
  useSpeechRecognition,
} from "react-speech-recognition";
import { days } from "../data/days";
import { SpeakOptions, useSpeechSynthesis } from "react-speech-kit";
// import { introSpeech } from "../data/speechPhrases";
import { v4 as uuidv4 } from "uuid";
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
  const { speak, voices } = useSpeechSynthesis();
  const baseSpeakOptions: Omit<SpeakOptions, "text"> = useMemo(() => {
    return {
      voice: voices[2],
      rate: 0.85,
      pitch: 0.1,
    };
  }, [voices]);

  // useEffect(() => {
  //   speak({ text: introSpeech, ...baseSpeakOptions });
  // }, [voices]);
  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
  }, []);
  const addDayTaskCommands: Command[] = useMemo(() => {
    return days.map((day) => {
      return {
        command: `${day} *`,
        callback: (voiceInput: string) => {
          if (voiceInput.toLowerCase().includes("remove")) return;
          return setWeeklyTasks((prev) => ({
            ...prev,
            [day]: [...prev[day], { id: uuidv4(), content: voiceInput }],
          }));
        },
      };
    });
  }, []);

  const removeCommands: Command[] = useMemo(() => {
    return days.map((day) => {
      return {
        command: `${day} remove *`,
        callback: (voiceInput: string) => {
          const task = weeklyTasks[day].find(
            ({ content }) => content == voiceInput,
          );
          if (!task) {
            return speak({
              text: `No ${voiceInput} found in ${day.toString()}`,
              ...baseSpeakOptions,
            });
          } else {
            return setWeeklyTasks((prev) => ({
              ...prev,
              [day]: prev[day].filter(({ content }) => content != voiceInput),
            }));
          }
        },
      };
    });
  }, [baseSpeakOptions, speak, weeklyTasks]);
  const commands: Command[] = addDayTaskCommands.concat(removeCommands);

  const { transcript, resetTranscript, finalTranscript } = useSpeechRecognition(
    {
      commands,
    },
  );
  useEffect(() => {
    resetTranscript();
  }, [finalTranscript, resetTranscript]);
  return { weeklyTasks, transcript, speak, baseSpeakOptions };
}
