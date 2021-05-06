import { Note } from 'woozee-lib/lib/data-structure/note';
import { Algorithm } from './enums/algorithm.enum';
import { DataStructure } from './enums/data-structure.enum';
import { Difficulty } from './enums/difficulty.enum';
import { Methodology } from './enums/methodology.enum';
import { Priority } from './enums/priority.enum';
import { QuestionTopic } from './enums/question-topic.enum';

export interface Question {
  title: string;
  links: string | string[];
  algorithm?: Array<Algorithm>; // First algorithm that came to mind.
  methodology?: Array<Methodology>; // Links to small pattern.
  dataStructure: DataStructure[];
  topics?: QuestionTopic[];
  note: Note; // Tips while solving the question.
  difficulty?: string | Difficulty;
  solutions?: string[]; // Solution link.
  priority?: Priority; // How important to understand this question.
  companies?: string[];
}
