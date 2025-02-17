import { type Dispatch, type SetStateAction, useMemo } from "react";
import { type Command } from "react-speech-recognition";
import { days } from "../data/days";
import { v4 as uuidv4 } from "uuid";
import { type SpeakOptions } from "react-speech-kit";
import { wordsToIgnoreWhenAddingTask } from "../data/phrases";

export function useCommands(
  setWeeklyTasks: Dispatch<SetStateAction<weeklyTasks>>,
  speak: (options: SpeakOptions) => void,
  baseSpeakOptions: Omit<SpeakOptions, "text">,
  weeklyTasks: weeklyTasks,
) {
  const commands: Command[] = useMemo(() => {
    return days.flatMap((day) => {
      const addCommand: Command = {
        command: `${day} *`,
        callback: (voiceInput: string) => {
          if (
            wordsToIgnoreWhenAddingTask.some((word) =>
              voiceInput.toLowerCase().includes(word),
            )
          ) {
            return;
          }
          setWeeklyTasks((prev) => {
            speak({
              text: `${voiceInput} was added to ${day}`,
              ...baseSpeakOptions,
            });
            return {
              ...prev,
              [day]: [...prev[day], { id: uuidv4(), content: voiceInput }],
            };
          });
        },
      };

      const removeCommand: Command = {
        command: `${day} remove *`,
        callback: (voiceInput: string) => {
          setWeeklyTasks((prev) => {
            const task = prev[day].find(
              ({ content }) => content === voiceInput,
            );
            if (task) {
              speak({
                text: `${voiceInput} was removed from ${day}`,
                ...baseSpeakOptions,
              });
              return {
                ...prev,
                [day]: prev[day].filter(
                  ({ content }) => content !== voiceInput,
                ),
              };
            } else {
              speak({
                text: `No ${voiceInput} found in ${day}`,
                ...baseSpeakOptions,
              });
              return prev;
            }
          });
        },
      };

      const resetCommand: Command = {
        command: `${day} reset`,
        callback: () => {
          speak({
            text: `Tasks for ${day} have been reset.`,
            ...baseSpeakOptions,
          });
          setWeeklyTasks((prev) => {
            return {
              ...prev,
              [day]: [],
            };
          });
        },
      };

      const readAllTasksForDayCommand: Command = {
        command: `${day} all`,
        callback: () => {
          const tasksForTheDayString = weeklyTasks[day]
            .map(({ content }) => content)
            .join(" , ");
          speak({
            text: `Tasks for ${day} are ${tasksForTheDayString}`,
            ...baseSpeakOptions,
          });
        },
      };

      return [
        addCommand,
        removeCommand,
        resetCommand,
        readAllTasksForDayCommand,
      ];
    });
  }, [baseSpeakOptions, setWeeklyTasks, speak, weeklyTasks]);

  return commands;
}
