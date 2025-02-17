import { WeeklyTasksTable } from "./components/WeeklyTasksTable";
import { useAddTask } from "./hooks/useAddTask";
import { SpeechButtonsList } from "./components/SpeechButtonsList";
function App() {
  const { weeklyTasks, transcript, speak, baseSpeakOptions, cancel } =
    useAddTask();
  return (
    <main>
      <WeeklyTasksTable weeklyTasks={weeklyTasks} />
      <SpeechButtonsList
        cancel={cancel}
        speak={speak}
        baseSpeakOptions={baseSpeakOptions}
      />
      <div aria-live="polite" aria-atomic="true" className="hidden">
        {transcript}
      </div>
    </main>
  );
}

export default App;
