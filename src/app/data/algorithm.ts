import { Algorithm } from '../models/enums/algorithm.enum';
import { DataStructure } from '../models/enums/data-structure.enum';
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
  },
];
