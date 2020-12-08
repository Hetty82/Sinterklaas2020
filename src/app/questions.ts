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
    title: 'Wat is de output?',
    body: `function zegHallo() {
  console.log(naam);
  console.log(leeftijd);
  var naam = 'Maeven';
  let leeftijd = 4;
}

zegHallo();`,
    options: {
      a: '<code>Maeven</code> en <code>undefined</code>',
      b: '<code>Maeven</code> en <code>ReferenceError</code>',
      c: '<code>ReferenceError</code> en <code>4</code>',
      d: '<code>undefined</code> en <code>ReferenceError</code>',
    },
    correctAnswer: AnswerOption.D,
  },
  {
    id: '2',
    title: 'Wat is de output?',
    body: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}`,
    options: {
      a: '<code>0 1 2</code> en <code>0 1 2</code>',
      b: '<code>0 1 2</code> en <code>3 3 3</code>',
      c: '<code>3 3 3</code> en <code>0 1 2</code>',
      d: '<code>0 0 0</code> en <code>3 3 3</code>',
    },
    correctAnswer: AnswerOption.C,
  },
  {
    id: '3',
    title: 'Wat is de output?',
    body: `const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());`,
    options: {
      a: '<code>20</code> en <code>62.83185307179586</code>',
      b: '<code>20</code> en <code>NaN</code>',
      c: '<code>20</code> en <code>63</code>',
      d: '<code>NaN</code> en <code>63</code>',
    },
    correctAnswer: AnswerOption.B,
  },
  {
    id: '4',
    title: 'Wat is de output?',
    body: `let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);`,
    options: {
      a: '<code>true</code> <code>false</code> <code>true</code>',
      b: '<code>false</code> <code>false</code> <code>true</code>',
      c: '<code>true</code> <code>false</code> <code>false</code>',
      d: '<code>false</code> <code>true</code> <code>true</code>',
    },
    correctAnswer: AnswerOption.C,
  },
];
