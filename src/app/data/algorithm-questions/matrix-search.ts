import { Algorithm } from 'src/app/models/enums/algorithm.enum';
import { DataStructure } from 'src/app/models/enums/data-structure.enum';
import { Methodology } from 'src/app/models/enums/methodology.enum';
import { QuestionTopic } from 'src/app/models/enums/question-topic.enum';
import { Question } from 'src/app/models/question';

export const matrixSearchProblems: Question[] = [
  {
    links: 'https://leetcode.com/problems/middle-of-the-linked-list',
    title: 'Shortest Path in Binary Matrix',
    methodology: [Methodology.DIRECTION_ITERATION],
    dataStructure: [DataStructure.MATRIX],
    algorithm: [Algorithm.SEARCH_BFS],
    note: {
      text: 'BFS is the best option for shortest path search.',
      notes: [
        {
          text: 'DP will not work because of directional movement',
        },
      ],
    },
    solutions: [
      'https://leetcode.com/problems/shortest-path-in-binary-matrix/',
    ],
    topics: [QuestionTopic.MAZE],
  },
];
