export interface Question {
  id: string;
  text: string;
  withAvatar?: boolean;
}

export interface Answer {
  id: string;
  text?: string;
  image?: any;
}

export enum TypeAnswer {
  'list',
  'calculation',
  'flatList',
}

export enum TypeQuestionAnswer {
  question,
  answer,
}

export interface QuestionAnswer {
  id: string;
  questions: Question[];
  typeAnswer: TypeAnswer;
  answers: Answer[];
  type: TypeQuestionAnswer.question;
}

const dataVirtualChef: QuestionAnswer[] = [
  {
    id: '0',
    questions: [
      {
        id: '0',
        text: 'Good evening, Hieu!',
        withAvatar: true,
      },
      {
        id: '1',
        text: 'What would you like to eat?',
      },
    ],
    typeAnswer: TypeAnswer.list,
    answers: [
      {
        id: '0',
        text: 'Main Course',
      },
      {
        id: '1',
        text: 'Desert',
      },
      {
        id: '2',
        text: 'Salad',
      },
    ],
    type: TypeQuestionAnswer.question,
  },
  {
    id: '1',
    questions: [
      {
        id: '0',
        text: 'How much time do you have for cooking?',
        withAvatar: true,
      },
    ],
    answers: [
      {
        id: '0',
        text: 'calculate',
      },
    ],
    typeAnswer: TypeAnswer.calculation,
    type: TypeQuestionAnswer.question,
  },
  {
    id: '2',
    typeAnswer: TypeAnswer.list,
    questions: [
      {
        id: '0',
        text: 'For how many people?',
        withAvatar: true,
      },
    ],
    answers: [
      {
        id: '0',
        text: '2 servings',
      },
      {
        id: '1',
        text: '3 servings',
      },
      {
        id: '2',
        text: '4 servings',
      },
    ],
    type: TypeQuestionAnswer.question,
  },
  {
    id: '3',
    questions: [
      {
        id: '0',
        text: 'Recipes that match with your preference.',
        withAvatar: true,
      },
    ],
    answers: [
      {
        id: '0',
        text: 'Chicken Fajitas With Seeded Tortilla Wraps & Salsa',
        image: require('app/assets/Virtual/img_recipe.png'),
      },
      {
        id: '1',
        text: 'Oven-Baked Apricot Chicken Legs',
        image: require('app/assets/Virtual/img_recipe_2.png'),
      },
    ],
    typeAnswer: TypeAnswer.flatList,
    type: TypeQuestionAnswer.question,
  },
];

export default dataVirtualChef;
