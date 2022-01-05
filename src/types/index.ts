export type ScoreT = {
  [key: number]: number[];
};

export type QuestionOptionT = { text: string; correct: boolean }[];

export type QuestionT = {
  question: string;
  options: QuestionOptionT;
};
