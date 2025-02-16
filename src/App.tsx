import { useEffect, useState } from "react";
import { WeeklyTasksTable } from "./components/WeeklyTasksTable";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { processTranscript } from "./helpers/processTranscript";
function App() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [mode, setMode] = useState<mode>("idle");
  const [selectedDay, setSelectedDay] = useState<keyof weeklyTasks | null>(
    null,
  );
  const [weeklyTasks, setWeeklyTasks] = useState<weeklyTasks>({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
  }, []);
  useEffect(() => {
    if (transcript) {
      processTranscript({
        transcript,
        mode,
        selectedDay,
        weeklyTasks,
        setMode,
        setSelectedDay,
        setWeeklyTasks,
        resetTranscript,
      });
    }
  }, [mode, resetTranscript, selectedDay, transcript, weeklyTasks]);
  return (
    <main>
      <WeeklyTasksTable weeklyTasks={weeklyTasks} />
    </main>
  );
}

export default App;
