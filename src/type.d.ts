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
