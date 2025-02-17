type mode = "idle" | "adding";
type task = {
  id: number;
  content: string;
};
type weeklyTasks = {
  Monday: task[];
  Tuesday: task[];
  Wednesday: task[];
  Thursday: task[];
  Friday: task[];
  Saturday: task[];
  Sunday: task[];
};

type commandKeyword = "remove" | "reset" | "all";

type speechButtonProps = {
  speak: (options: SpeakOptions) => void;
  text: string;
  baseSpeakOptions: {
    voice: SpeechSynthesisVoice;
    rate: number;
    pitch: number;
  };
  children: ReactNode;
};

type speechButton = {
  textToRead: string;
  buttonText: string;
};
