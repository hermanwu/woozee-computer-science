import { Algorithm } from '../models/enums/algorithm.enum';
import { DataStructure } from '../models/enums/data-structure.enum';
import { Methodology } from '../models/enums/methodology.enum';
import { QuestionTopic } from '../models/enums/question-topic.enum';
import { Question } from '../models/question';

export const problems: Array<Question> = [
  // {
  //   links: 'https://leetcode.com/problems/merge-intervals/',
  //   title: '56. Merge Intervals',
  //   images:
  //     'https://lh3.googleusercontent.com/pw/ACtC-3fiDex89TUuVLgHQdeeC5PQnupbT3pw65ml0AzrWmtyJBFnQIsZlZ7laTFpn9G-I_ozPHNRVE9WAAqXNWbxoKtiymrc0V3LsGqVjR3DKnT7EYqmZzQ_27LudQy4JnFAbdFLR-m-CEhQGz1MrYHkzjFv=w878-h1518-no?authuser=6',
  //   solutionImg:
  //     'https://photos.google.com/u/6/share/AF1QipMM5BFHLlCOxn6dPq6Hi4OQf0iD2o9z2ZFP2JgnxVFO-4zvoyVEVKJN7JCzVF5dYQ/photo/AF1QipPqi1cwP4Xw5FGftVa4nOCscpbqXrPwXXdehrzr?key=ZUE5VDlWVldNM21HMmlBeU5qbEdzS3UzRXFDM1BR',
  //   topic: ['array', 'sort', 'interval', 'fast-slow-pointer'],
  // },
  // {
  //   link: 'https://leetcode.com/problems/number-of-islands/',
  //   title: '200 Number of Islands',
  //   algorithm: ['DFS'],
  //   dataStructure: ['Matrix'],
  // },
  // {
  //   questionsLinks: [
  //     'https://leetcode.com/problems/number-of-distinct-islands/',
  //   ],
  //   solutionLinks: [''],
  //   title: 'Number of Distinct Islands',
  //   algorithm: ['DFS'],
  //   dataStructure: ['Matrix', 'Set'],
  //   tip: 'Use string to store iteration',
  // },
  // {
  //   questionLink: 'https://www.lintcode.com/problem/570/',
  //   solutionLink: '',
  //   title: 'Find the Missing Number II',
  //   algorithm: [Algorithm.BACK_TRACKING, Algorithm.SEARCH_DFS],
  //   note: {
  //     text:
  //       'use a global variable to track if a result has been found during DFS',
  //   },
  // },
  {
    links: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
    title: 'Remove Nth Node from End of List',
    algorithm: [Algorithm.TWO_POINTERS_SAME_DIRECTION],
    dataStructure: [DataStructure.LinkedList],
    note: {
      text:
        'use a global variable to track if a result has been found during DFS',
    },
    topics: [],
  },

  {
    links: 'https://leetcode.com/problems/word-search/',
    title: '79. Word Search',
    algorithm: [Algorithm.SEARCH_DFS, Algorithm.BACK_TRACKING],
    dataStructure: [DataStructure.MATRIX],
    note: {
      text: 'remember to set and unset visited characters',
    },
    topics: [QuestionTopic.WORD],
  },
  {
    links: 'https://leetcode.com/problems/decode-string/',
    title: '394. Decode String',
    methodology: [Methodology.RECURSION],
    dataStructure: [DataStructure.STACK],
    difficulty: 'medium',
    note: {
      text:
        'Use an object to track multiple state: i.e. index, count, repeating string, result',
    },
    topics: [QuestionTopic.STRING_MANIPULATION],
  },
  {
    links: 'https://leetcode.com/problems/sum-root-to-leaf-numbers/',
    title: '129. Sum Root to Leaf Numbers',
    methodology: [
      Methodology.RECURSION_WITH_RESULT,
      Methodology.TREE_LEVEL_ORDER_TRAVERSAL,
    ],
    dataStructure: [DataStructure.TREE_BINARY_TREE],
    difficulty: 'medium',
    note: {
      text: 'leaf node first -> then left and right node',
    },
    topics: [QuestionTopic.TREE_TRAVERSALS],
  },
  {
    links:
      'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
    title: '17. Letter Combinations of a Phone Number',
    methodology: [Methodology.RECURSION_WITH_RESULT],
    algorithm: [Algorithm.SEARCH_DFS, Algorithm.BACK_TRACKING],
    dataStructure: [DataStructure.ARRAY, DataStructure.STRING],
    difficulty: 'medium',
    note: {
      text: 'use map to track all numbers',
    },
    topics: [QuestionTopic.PERMUTATION],
  },
];
