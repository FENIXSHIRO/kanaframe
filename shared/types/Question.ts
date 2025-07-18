export type Question = {
    label: string,
    answer: string,
}

export type QuestionsState = {
    questionList: Question[] | null
    currentQuestion: Question | null
    questionAmount: number
}