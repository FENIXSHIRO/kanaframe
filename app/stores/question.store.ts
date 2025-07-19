import type { QuestionsState } from '~~/shared/types/Question';

import kanaJson from '~/assets/data/kana.json';
import type { Modes } from '~~/shared/types/Modes';
import { shuffleArray } from '~~/shared/utils/Shuffle';

export const useQuestionStore = defineStore('questionStore', {
  state: (): QuestionsState => ({
    questionAmount: 0,
    questionList: null,
    currentQuestion: {
      question: null,
      status: 'none',
    },
  }),
  getters: {
    getCurrentQuestionsCount(): { position: number, from: number } {
      return {
        position: (this.questionList?.length ?? -1) + 1,
        from: this.questionAmount,
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

    setCurrentQuestion() {
      this.currentQuestion.status = 'none';
      if (!this.questionList || !this.questionList.length) return;
      this.currentQuestion.question = this.questionList.pop()!;
    },

    answerQuestion(answer: string) {
      if (!this.currentQuestion.question) return;

      const answerIsCorrect = this.currentQuestion.question.answer === answer;

      this.currentQuestion.status = answerIsCorrect ? 'correct' : 'wrong';

      setTimeout(
        () => {
          if (!answerIsCorrect && this.currentQuestion.question) {
            this.questionList?.unshift(this.currentQuestion.question);
          }

          this.setCurrentQuestion();
        },
        answerIsCorrect ? 500 : 2000,
      );
    },
  },
});
