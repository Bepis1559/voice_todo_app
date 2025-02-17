import { getSpeechButtons } from "../helpers/getSpeechButtons";
import { SpeechButton } from "./speechButton";

type props = Omit<speechButtonProps, "children" | "text">;

export function SpeechButtonsList({ speak, baseSpeakOptions }: props) {
  return (
    <ul className="speechButtonsList">
      {getSpeechButtons().map(({ textToRead, buttonText }) => {
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
  );
}
