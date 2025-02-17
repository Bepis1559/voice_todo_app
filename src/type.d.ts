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

type buttonBase = {
  text: string;
};

type speechButtonProps = {
  speak: (options: SpeakOptions) => void;
  baseSpeakOptions: Omit<SpeakOptions, "text">;
  listenFunc: (options?: ListeningOptions) => Promise<void>;
  children: ReactNode;
  cancel?: () => void;
} & buttonBase;

type speechButton = {
  buttonText: string;
  shouldEnableListening: boolean;
} & buttonBase;
