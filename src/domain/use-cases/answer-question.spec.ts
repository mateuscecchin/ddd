import { Answer } from "../entities/answer";
import { AnswerRepository } from "../repositories/answer-repository";
import { AnswerQuestionUseCase } from "./answer-question";

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return;
  },
};

test("Create a answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository);

  const answer = await answerQuestion.execute({
    content: "New answer",
    instructorId: "1",
    questionId: "1",
  });

  expect(answer.content).toEqual("New answer");
});
