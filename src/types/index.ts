export type ScoreT = {
  [key: number]: number[];
};

export type QuestionOptionT = { text: string; correct: boolean }[];

export type QuestionT = {
  id: number;
  question: string;
  options: QuestionOptionT;
};
