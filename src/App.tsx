import { WeeklyTasksTable } from "./components/WeeklyTasksTable";
import { useAddTask } from "./hooks/useAddTask";
import { SpeechButtonsList } from "./components/SpeechButtonsList";
function App() {
  const { weeklyTasks, transcript, speak, baseSpeakOptions, cancel } =
    useAddTask();
  return (
    <main>
      <WeeklyTasksTable weeklyTasks={weeklyTasks} />
      {transcript}
      <SpeechButtonsList
        cancel={cancel}
        speak={speak}
        baseSpeakOptions={baseSpeakOptions}
      />
    </main>
  );
}

export default App;
