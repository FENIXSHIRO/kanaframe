import type { QuestionsState } from '~~/shared/types/Question';

import kanaJson from '~/assets/data/kana.json';
import type { Modes } from '~~/shared/types/Modes';
import { shuffleArray } from '~~/shared/utils/Shuffle';

export const useQuestionStore = defineStore('questionStore', {
  state: (): QuestionsState => ({
    questionList: null,
    currentMode: 'hiragana',
    currentQuestion: {
      question: null,
      status: 'none',
    },
    listState: {
      questionAmount: 0,
      correct: 0,
      wrong: 0,
    },
  }),
  getters: {
    getCurrentQuestionsCount(): { position: number, from: number } {
      const currentQuestionCount = this.currentQuestion.question ? 1 : 0;

      return {
        position: (this.questionList?.length ?? -1) + currentQuestionCount,
        from: this.listState.questionAmount,
      };
    },
  },
  actions: {
    setQuestionList(
      mode: Modes['characterLearn'] = 'hiragana',
      amount: number,
    ) {
      const kana = Object.values(kanaJson);
      const clampedAmount = Math.min(kana.length, amount);
      const characterSet = shuffleArray(kana).slice(0, clampedAmount);

      this.currentMode = mode;

      this.listState = {
        questionAmount: clampedAmount,
        correct: 0,
        wrong: 0,
      };

      switch (mode) {
        case 'hiragana':
          this.questionList = characterSet.map(character => ({
            label: character.hiragana,
            answer: character.romaji,
          }));
          break;
        case 'katakana':
          this.questionList = characterSet.map(character => ({
            label: character.katakana,
            answer: character.romaji,
          }));
          break;
        case 'mixed':
        { const halfAmount = Math.floor(clampedAmount / 2);
          const hiraganaList = characterSet
            .slice(0, halfAmount)
            .map(character => ({
              label: character.hiragana,
              answer: character.romaji,
            }));
          const katakanaList = characterSet
            .slice(halfAmount, halfAmount * 2)
            .map(character => ({
              label: character.katakana,
              answer: character.romaji,
            }));
          this.questionList = shuffleArray([
            ...hiraganaList,
            ...katakanaList,
          ]).slice(0, clampedAmount);
          break; }
      }
    },

    finishSurvey() {
      this.listState.questionAmount = 0;

      this.currentQuestion = {
        question: null,
        status: 'none',
      };
    },

    setCurrentQuestion() {
      this.currentQuestion.status = 'none';

      if (!this.questionList) return;

      if (!this.questionList.length) {
        this.finishSurvey();
        return;
      }

      this.currentQuestion.question = this.questionList.pop()!;
    },

    startNewSurvey(mode: Modes['characterLearn'] = 'hiragana',
      amount: number) {
      this.setQuestionList(mode, amount);
      this.setCurrentQuestion();
    },

    restartSurvey(amount: number) {
      this.setQuestionList(this.currentMode, amount);
      this.setCurrentQuestion();
    },

    answerQuestion(answer: string) {
      if (!this.currentQuestion.question) return;

      const answerIsCorrect = this.currentQuestion.question.answer === answer;

      this.currentQuestion.status = answerIsCorrect ? 'correct' : 'wrong';

      setTimeout(
        () => {
          if (!answerIsCorrect && this.currentQuestion.question) {
            this.questionList?.unshift(this.currentQuestion.question);
            this.listState.wrong++;
          }

          this.listState.correct++;
          this.setCurrentQuestion();
        },
        answerIsCorrect ? 500 : 2000,
      );
    },
  },
});
