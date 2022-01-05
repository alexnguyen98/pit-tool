import React, { useReducer, useMemo, useCallback, useContext, createContext } from 'react';
import { ThemeProvider } from 'next-themes';
import { QuestionT, ScoreT } from '../types';

export interface State {
  finished: boolean;
  maxQuestions: number;
  activeIndex: number;
  frequencies: number[];
  savedQuestions: QuestionT[];
  scores: ScoreT;
}

const initialState = {
  finished: false,
  activeIndex: 0,
  maxQuestions: 25,
  frequencies: [],
  savedQuestions: [],
  scores: {},
};

type Action =
  | {
      type: 'SET_ALL_DATA';
      data: Omit<State, 'output'>;
    }
  | {
      type: 'SET_SAVED_QUESTIONS';
      questions: QuestionT[];
    }
  | {
      type: 'SET_MAX_QUESTIONS';
      max: number;
    }
  | {
      type: 'SET_SCORE';
      score: ScoreT;
    }
  | {
      type: 'SET_FREQUENCY';
      frequencies: number[];
    }
  | {
      type: 'SET_ACTIVE_INDEX';
      index: number;
    }
  | {
      type: 'FINISH_GAME';
    }
  | {
      type: 'RESET_STATS';
    };

export const GlobalContext = createContext<State | any>(initialState);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_ALL_DATA':
      return {
        ...state,
        ...action.data,
      };
    case 'SET_SAVED_QUESTIONS':
      return {
        ...state,
        savedQuestions: action.questions,
      };
    case 'SET_MAX_QUESTIONS':
      return {
        ...state,
        maxQuestions: action.max,
      };
    case 'SET_FREQUENCY':
      return {
        ...state,
        frequencies: action.frequencies,
      };
    case 'SET_SCORE':
      return {
        ...state,
        scores: { ...state.scores, ...action.score },
      };
    case 'SET_ACTIVE_INDEX':
      return {
        ...state,
        activeIndex: action.index,
      };
    case 'FINISH_GAME':
      return {
        ...state,
        finished: true,
      };
    case 'RESET_STATS':
      return {
        ...state,
        finished: false,
        activeIndex: 0,
        frequencies: [],
        savedQuestions: [],
        scores: {},
      };
  }
};

const GlobalProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setData = useCallback(
    (data: State) =>
      dispatch({
        type: 'SET_ALL_DATA',
        data,
      }),
    [dispatch]
  );

  const setQuestions = useCallback(
    (questions: QuestionT[]) =>
      dispatch({
        type: 'SET_SAVED_QUESTIONS',
        questions,
      }),
    [dispatch]
  );

  const setMaxQuestions = useCallback(
    (max: number) =>
      dispatch({
        type: 'SET_MAX_QUESTIONS',
        max,
      }),
    [dispatch]
  );

  const setFrequencies = useCallback(
    (frequencies: number[]) =>
      dispatch({
        type: 'SET_FREQUENCY',
        frequencies,
      }),
    [dispatch]
  );

  const setScore = useCallback(
    (score: ScoreT) =>
      dispatch({
        type: 'SET_SCORE',
        score,
      }),
    [dispatch]
  );

  const setActiveIndex = useCallback(
    (index: number) =>
      dispatch({
        type: 'SET_ACTIVE_INDEX',
        index,
      }),
    [dispatch]
  );

  const finishGame = useCallback(
    () =>
      dispatch({
        type: 'FINISH_GAME',
      }),
    [dispatch]
  );

  const resetStats = useCallback(
    () =>
      dispatch({
        type: 'RESET_STATS',
      }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      setData,
      setQuestions,
      setMaxQuestions,
      setFrequencies,
      setScore,
      setActiveIndex,
      finishGame,
      resetStats,
    }),
    [state]
  );

  return <GlobalContext.Provider value={value} {...props} />;
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(`useGlobalContext must be used within a GlobalProvider`);
  }
  return context;
};

export const ManagedContext: React.FC = ({ children }) => {
  return (
    <GlobalProvider>
      <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
    </GlobalProvider>
  );
};
