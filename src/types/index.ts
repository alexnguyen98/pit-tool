export enum SubjectType {
  KAB = 'KAB',
  PIT = 'PIT',
}

export type ScoreT = {
  [key: number]: number[];
};

export type QuestionOptionT = { text: string; correct: boolean }[];

export type QuestionT = {
  id: number;
  question?: string | null;
  img?: string | null;
  subject: SubjectType;
  options: QuestionOptionT;
};
