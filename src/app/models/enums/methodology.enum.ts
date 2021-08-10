/**
 * A blue print of solving a question.
 */
export enum Methodology {
  RECURSION = '递归',
  RECURSION_WITH_RESULT = '递归携带答案',
  RECURSION_RETURN_RESULT = '递归返回答案',

  // TREE
  TREE_LEVEL_ORDER_TRAVERSAL = '逐层遍历',

  // STACK.
  MONOTONIC_STACK = '单调栈',

  // DP
  DP_INTERVAL = '动态规划',
  DP_DYNAMIC_PROGRAMMING = '',
  DP_BACKPACK = '',
  DP_COORDINATE = '',
  DP_PREFIX = '',
  DP_STATE_COMPRESSION = '',
  DP_GAME = '',
  DP_TWO_SEQUENCES = '动态规划-排序',
  DP_TREE = '',
  DP_TAKE_IT_OR_NOT = '取舍',
  DP_KNAPSACK = '动态规划-背包问题',

  TWO_POINTERS = '双指针',
  TWO_POINTERS_FASTER_SLOW = '',

  BOARD_GAME_VERIFICATION = '棋盘确认',

  TREE_PREORDER_TRAVERSAL = '前序遍历',

  SIGN_HANDLING = 'link',

  MOD = '取餘',

  ARRAY_AVOID_DUPLICATE = '数组去重',

  DIRECTION_ITERATION = '多方向遍历',

  PREFIX_SUM = '前序数组',

  TREE_RECURSION = '树的递归',
  TREE_PRE_ORDER = '前序遍历',

  TREE_IN_ORDER = '中序遍历',

  TREE_POST_ORDER = '后序遍历',

  SLIDING_WINDOW_STACK = '移动窗口 + 栈',

  // Graph
  UNION_TREE = '合并集合',
  PARENT_LOOKING = '找父亲',
}
