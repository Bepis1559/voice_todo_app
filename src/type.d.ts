type mode = "idle" | "adding";

type dailyTasks = string[];
type weeklyTasks = {
  Monday: dailyTasks;
  Tuesday: dailyTasks;
  Wednesday: dailyTasks;
  Thursday: dailyTasks;
  Friday: dailyTasks;
  Saturday: dailyTasks;
  Sunday: dailyTasks;
};
type processTranscriptParams = {
  transcript: string;
  mode: mode;
  selectedDay: keyof weeklyTasks | null;
  weeklyTasks: weeklyTasks;
  setMode: (mode: mode) => void;
  setSelectedDay: (day: keyof weeklyTasks | null) => void;
  setWeeklyTasks: (tasks: weeklyTasks) => void;
  resetTranscript: () => void;
};
