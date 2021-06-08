import { Methodology } from '../models/enums/methodology.enum';

export const methodologies = [
  {
    type: Methodology.TREE_RECURSION,
    steps: [
      'Design a recursive call that pass in enough information (Whether those information is good to store globally).',
      'In the recursive method, handle null condition and terminate condition.',
      'Divide and conquer:  handle three branches: Left child node, right child node, and middle node (order can definitely be changed).',
      'Each branch should have terminate condition and move to next level.',
    ],
    notes: [' For simple purpose, you do not need to use method itself.'],
  },

  {
    type: Methodology.TREE_PRE_ORDER,
    steps: [
      'Create result and a stack',
      'Start pointer from root',
      ,
      {
        text: 'While Loop stack is not empty, or p is not null',
        steps: [
          'if p is not null, add to stack and result',
          'traverse to let',
          'else pop from stack and go to right',
        ],
      },
    ],
  },

  {
    type: Methodology.TREE_IN_ORDER, // order of the root node.
    steps: [
      'Create result and a stack',
      'Start pointer from root',
      ,
      {
        text: 'While Loop stack is not empty, or p is not null',
        steps: [
          'if p is not null, add to stack',
          'traverse to let',
          'else pop from stack, add to result, and go to right',
        ],
      },
    ],
  },

  {
    type: Methodology.TREE_POST_ORDER,
    steps: [
      'Create result and a stack',
      'Start pointer from root',
      ,
      {
        text: 'While Loop stack is not empty, or p is not null',
        steps: [
          'if p is not null, add to stack, add to begining of result',
          'traverse to right',
          'else pop from stack, add to result, and go to left',
        ],
      },
    ],
  },

  {
    type: Methodology.DP_KNAPSACK,
    steps: [
      'understanding the states to track, use dp state to track the largest number',
      'Limit (space, days), Varired cost( money), Min or Max value ',
      'if a state can not be track, use for loop',
      'initial state',
      'state transfer function',
      'return result',
    ],
  },

  {
    type: Methodology.DP_TWO_SEQUENCES,
    steps: [
      'setup a 2D array with m and n.',
      'identity sequence and subsequence',
      'subsequence character always needs to be selected, sequence does not need to be selected.',
    ],
  },
];
