import { SpeechButton } from "./components/speechButton";
import { WeeklyTasksTable } from "./components/WeeklyTasksTable";
import { useAddTask } from "./hooks/useAddTask";
import { getSpeechButtons } from "./helpers/getSpeechButtons";

function App() {
  const { weeklyTasks, transcript, speak, baseSpeakOptions } = useAddTask();
  const speechButtons = getSpeechButtons();
  return (
    <main>
      <WeeklyTasksTable weeklyTasks={weeklyTasks} />
      <br />
      {transcript}
      <ul>
        {speechButtons.map(({ textToRead, buttonText }) => {
          return (
            <li key={buttonText}>
              <SpeechButton
                speak={speak}
                text={textToRead}
                baseSpeakOptions={baseSpeakOptions}>
                {buttonText}
              </SpeechButton>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
