export type Question = {
  label: string,
  answer: string
};

export type QuestionsState = {
  questionList: Question[] | null,
  currentMode: 'hiragana' | 'katakana' | 'mixed',
  currentQuestion: {
    question: Question | null,
    status: 'none' | 'correct' | 'wrong'
  },
  listState: {
    questionAmount: number,
    correct: number,
    wrong: number
  }
};
