import { WeeklyTasksTable } from "./components/WeeklyTasksTable";
import { useAddTask } from "./hooks/useAddTask";
import { SpeechButtonsList } from "./components/SpeechButtonsList";

function App() {
  const { weeklyTasks, transcript, speak, baseSpeakOptions } = useAddTask();
  return (
    <main>
      <WeeklyTasksTable weeklyTasks={weeklyTasks} />
      {transcript}
      <SpeechButtonsList speak={speak} baseSpeakOptions={baseSpeakOptions} />
    </main>
  );
}

export default App;
