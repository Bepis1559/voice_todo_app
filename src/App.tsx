import { WeeklyTasksTable } from "./components/WeeklyTasksTable";
import { introSpeech } from "./data/phrases";
import { useAddTask } from "./hooks/useAddTask";
function App() {
  const { weeklyTasks, transcript, speak, baseSpeakOptions } = useAddTask();

  return (
    <main>
      <WeeklyTasksTable weeklyTasks={weeklyTasks} />
      <br />
      {transcript}
      <div>
        <button
          onClick={() => speak({ text: introSpeech, ...baseSpeakOptions })}
          type="button"
          className="btn btn-primary">
          Read instructions
        </button>
        <button
          onClick={() =>
            speak({ text: "Listening for tasks", ...baseSpeakOptions })
          }
          type="button"
          className="btn btn-primary">
          Start listening
        </button>
      </div>
    </main>
  );
}

export default App;
