enum AnswerOption {
  A = 'a',
  B = 'b',
  C = 'c',
  D = 'd',
}

interface Question {
  id: string;
  title: string;
  body: string;
  correctAnswer: AnswerOption;
  selectedAnswer?: AnswerOption;
  options: { [key in AnswerOption]: string };
}

export const questions: Question[] = [
  {
    id: '1',
    title: "What's the output?",
    body: `function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();`,
    options: {
      a: '<code>Lydia</code> and <code>undefined</code>',
      b: '<code>Lydia</code> and <code>ReferenceError</code>',
      c: '<code>ReferenceError</code> and <code>21</code>',
      d: '<code>undefined</code> and <code>ReferenceError</code>',
    },
    correctAnswer: AnswerOption.D,
  },
];
