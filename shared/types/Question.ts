export type Question = {
    label: string,
    answer: string,
}

export type QuestionsState = {
    questionList: Question[] | null
    currentQuestion: {
        question: Question | null
        status: 'none' | 'correct' | 'wrong'
    }
    questionAmount: number
}