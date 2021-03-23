import { Algorithm } from '../models/enums/algorithm.enum';
import { DataStructure } from '../models/enums/data-structure.enum';
import { Difficulty } from '../models/enums/difficulty.enum';
import { Methodology } from '../models/enums/methodology.enum';
import { Priority } from '../models/enums/priority.enum';
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
    topics: [QuestionTopic.PATH_SUM],
  },
  {
    links: 'https://leetcode.com/problems/daily-temperatures',
    title: '739 Daily Temperature',
    methodology: [Methodology.MONOTONIC_STACK],
    dataStructure: [DataStructure.STACK],
    difficulty: 'medium',
    note: {
      text:
        'If top stack number is smaller than current number, pop; If top number is larger than current number, push;',
    },
    solutions: [
      'https://leetcode.com/problems/daily-temperatures/discuss/157886/javascript-stack-solution-with-explaination',
    ],
  },
  {
    links: 'https://leetcode.com/problems/combination-sum/',
    title: '39. Combination Sum',
    dataStructure: [DataStructure.ARRAY],
    algorithm: [Algorithm.BACK_TRACKING],
    difficulty: 'medium',
    note: {
      text: 'remember to back track.',
    },
    topics: [QuestionTopic.COMBINATION_PERMUTATION],
    solutions: ['https://leetcode.com/submissions/detail/133671067/'],
  },
  {
    links: 'https://leetcode.com/problems/longest-palindromic-substring',
    title: '5. Longest palindromic substring',
    methodology: [Methodology.DP_INTERVAL, Methodology.TWO_POINTERS],
    dataStructure: [DataStructure.ARRAY],
    algorithm: [Algorithm.DP],
    difficulty: 'medium',
    note: {
      text: 'Handle even and odd separately.',
    },
    topics: [QuestionTopic.PALINDROME],
    solutions: ['https://leetcode.com/submissions/detail/138565240/'],
  },
  {
    links: 'https://leetcode.com/problems/path-sum/',
    title: 'Path Sum',
    methodology: [Methodology.RECURSION_RETURN_RESULT],
    dataStructure: [DataStructure.TREE],
    algorithm: [Algorithm.SEARCH_DFS],
    difficulty: Difficulty.EASY,
    note: {
      text: 'node with one child is not leaf node',
    },
    topics: [QuestionTopic.PATH_SUM],
    solutions: [
      'https://github.com/hermanwu/algorithm-woo/blob/a9c12fbca99d43c75fd6ce965bd869cc547093dd/Tree/path-sum/path-sum/path-sum.ts',
    ],
    priority: Priority.SUPER,
  },
  {
    links: 'https://leetcode.com/problems/path-sum-ii/',
    title: 'Path Sum II',
    methodology: [Methodology.RECURSION_WITH_RESULT],
    dataStructure: [DataStructure.TREE],
    algorithm: [Algorithm.SEARCH_DFS],
    difficulty: Difficulty.EASY,
    note: {
      text: 'node with one child is not leaf node',
    },
    topics: [QuestionTopic.PATH_SUM],
    solutions: [
      'https://github.com/hermanwu/algorithm-woo/blob/4c9cbcc669d4276f00eae547144bcef9a403509c/Tree/path-sum/path-sum/path-sum-ii.ts',
    ],
    priority: Priority.MEDIUM,
  },
  {
    links: 'https://leetcode.com/problems/design-tic-tac-toe/',
    title: 'Tic Tac Toe Design',
    methodology: [Methodology.BOARD_GAME_VERIFICATION],
    dataStructure: [DataStructure.MATRIX],
    algorithm: [Algorithm.SEARCH_MEMORIZATION],
    difficulty: Difficulty.MEDIUM,
    note: {
      text: 'To get solution efficiently, track sum.',
    },
    topics: [QuestionTopic.BOARD_GAME],
    solutions: [
      'https://github.com/hermanwu/algorithm-woo/blob/6744b04a4e91f0b12e874b6b8e52ba2b3e6d192d/Matrix/board-games/tic-tac-toe/tic-tac-toe.ts',
    ],
    priority: Priority.SUPER,
  },
  {
    links: 'https://leetcode.com/problems/maximum-subarray/',
    title: 'Maximum Subarray',
    methodology: [Methodology.DP_TAKE_IT_OR_NOT],
    dataStructure: [DataStructure.ARRAY],
    algorithm: [Algorithm.Kadane],
    difficulty: Difficulty.BASIC,
    note: {
      text: 'To get solution efficiently, track sum.',
    },
    topics: [QuestionTopic.SUB_ARRAY],
    solutions: [
      'https://github.com/hermanwu/algorithm-woo/blob/61c03ac133fff388159a19499bac9a51dc9c5bcd/DP/maximum-subarray/maxium-subarray.ts',
    ],
    priority: Priority.SUPER,
  },
];
