import { DAYS } from "../data/DAYS";
import { speak } from "./speak";

export function processTranscript({
  transcript,
  mode,
  selectedDay,
  weeklyTasks,
  setMode,
  setSelectedDay,
  setWeeklyTasks,
  resetTranscript,
}: processTranscriptParams): void {
  const lowerText = transcript.toLowerCase().trim();

  if (mode === "adding") {
    if (lowerText.includes("done")) {
      speak(`Finished adding tasks for ${selectedDay}`);
      setMode("idle");
      setSelectedDay(null);
      resetTranscript();
      return;
    }
    if (lowerText.includes("cancel")) {
      speak("Canceled adding tasks.");
      setMode("idle");
      setSelectedDay(null);
      resetTranscript();
      return;
    }
    if (selectedDay) {
      const newTask = transcript.trim();
      setWeeklyTasks({
        ...weeklyTasks,
        [selectedDay]: [...weeklyTasks[selectedDay], newTask],
      });
      speak(`Added task: ${newTask}`);
      resetTranscript();
    }
    return;
  }

  for (const day of DAYS) {
    const dayLower = day.toLowerCase();

    if (lowerText.includes(`add tasks for ${dayLower}`)) {
      setMode("adding");
      setSelectedDay(day);
      speak(`You can now add tasks for ${day}. Say 'done' when finished.`);
      resetTranscript();
      return;
    }

    const readPhrases = [
      `what are my ${dayLower} tasks`,
      `read my ${dayLower} tasks`,
      `what do i have on ${dayLower}`,
      `what are my tasks for ${dayLower}`,
    ];
    if (readPhrases.some((phrase) => lowerText.includes(phrase))) {
      const tasks = weeklyTasks[day];
      if (tasks.length === 0) {
        speak(`You have no tasks for ${day}.`);
      } else {
        speak(`Your tasks for ${day} are: ${tasks.join(". ")}`);
      }
      resetTranscript();
      return;
    }
  }
}
