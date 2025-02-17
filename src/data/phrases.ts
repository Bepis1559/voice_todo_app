export const introSpeech =
  'Hi there ! This is your voice to do app. There are a few things to know before you start. To start adding tasks to a specific day , you should say the day and then the task , for example , Monday , cooking. You also have the option , like , "Monday all" , so all tasks can be read back to you. Please use this option rather often , as mistakes can happen. You can also remove a single task by saying , for example , "Monday remove cooking " . You can remove all the tasks for a day by saying, for example ,  "Monday , reset"';

export const wordsToIgnoreWhenAddingTask: commandKeyword[] = [
  "remove",
  "reset",
  "all",
];

export const instructionsSummary =
  "Name of the day , and anything after that will add a task. Name of the day remove , and anything after that will remove the task. Name of the day all , will list all of the tasks for the day . Name of the day reset , will remove all the tasks for the day.  ";
