import { SubjectType } from '../types';
import { KAB_QUESTIONS } from './kab';
import { PIT_QUESTIONS } from './pit';

export const MAX_QUESTIONS_MAP = {
  [SubjectType.KAB]: 120,
  [SubjectType.PIT]: 66,
};

export const QUESTIONS_MAP = {
  [SubjectType.KAB]: KAB_QUESTIONS,
  [SubjectType.PIT]: PIT_QUESTIONS,
};
