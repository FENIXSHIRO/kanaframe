import type { QuestionsState } from '~~/shared/types/Question';

import kanaJson from '~/assets/data/kana.json';
import type { Modes } from '~~/shared/types/Modes';
import { shuffleArray } from '~~/shared/utils/Shuffle';

export const useQuestionStore = defineStore('questionStore', {
  state: (): QuestionsState => ({
    questionAmount: 0,
    questionList: null,
    currentQuestion: null
  }),
  getters: {
    getCurrentQuestionsCount(): {position: number, from: number} {
      return {
        position: this.questionList?.length ?? 0,
        from: this.questionAmount
      };
    }
  },
  actions: {
    setQuestionList(mode: Modes['characterLearn'] = 'hiragana', amount: number) {
      const kana = Object.values(kanaJson);
      const clampedAmount = Math.min(kana.length, amount);
      const characterSet = shuffleArray(kana).slice(0, clampedAmount + 1);

      this.questionAmount = clampedAmount;

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
          this.questionList = characterSet.map(character => ({
            label: character.katakana,
            answer: character.romaji,
          }));
          break;
      }
    },

    setCurrentQuestion() {
      if (!this.questionList || !this.questionList.length) return;
      this.currentQuestion = this.questionList.pop()!;
    },

    answerQuestion(answer: string): boolean | undefined {
      if (!this.currentQuestion) return undefined;

      const answerIsCorrect = this.currentQuestion.answer === answer;

      if (!answerIsCorrect) {
        this.questionList?.unshift(this.currentQuestion);
      };
      this.setCurrentQuestion();

      return answerIsCorrect;
    }
  },
});
