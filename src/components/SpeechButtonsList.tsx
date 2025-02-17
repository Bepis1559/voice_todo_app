import { getSpeechButtons } from "../helpers/getSpeechButtons";
import { SpeechButton } from "./speechButton";
import SpeechRecognition from "react-speech-recognition";

type props = Omit<speechButtonProps, "children" | "text" | "listenFunc">;

export function SpeechButtonsList({ speak, baseSpeakOptions, cancel }: props) {
  return (
    <nav aria-label="Speech Command Buttons">
      <ul className="speechButtonsList">
        {getSpeechButtons().map(
          ({ text, buttonText, shouldEnableListening }) => {
            return (
              <li key={buttonText}>
                <SpeechButton
                  listenFunc={
                    shouldEnableListening
                      ? SpeechRecognition.startListening
                      : SpeechRecognition.stopListening
                  }
                  speak={speak}
                  text={text}
                  baseSpeakOptions={baseSpeakOptions}>
                  {buttonText}
                </SpeechButton>
              </li>
            );
          },
        )}
        <li>
          <SpeechButton
            speak={speak}
            baseSpeakOptions={baseSpeakOptions}
            listenFunc={SpeechRecognition.stopListening}
            text="I will shut up now"
            cancel={cancel}>
            Stop talking
          </SpeechButton>
        </li>
      </ul>
    </nav>
  );
}
