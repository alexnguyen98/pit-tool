export enum SubjectType {
  KAB = 'KAB',
  PIT = 'PIT',
}

export type ScoreT = {
  [key: number]: number[] | string;
};

export enum QuestionType {
  QUESTION = 'QUESTION',
  OPEN = 'OPEN',
}

export type QuestionOptionT = { text: string; correct: boolean }[];

export type QuestionT = {
  id: number;
  question?: string | null;
  img?: string | null;
  subject: SubjectType;
  type: QuestionType;
  options: QuestionOptionT;
};
