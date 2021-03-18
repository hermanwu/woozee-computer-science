import { Note } from 'woozee-lib/lib/data-structure/note';
import { Algorithm } from './enums/algorithm.enum';
import { DataStructure } from './enums/data-structure.enum';
import { Methodology } from './enums/methodology.enum';
import { QuestionTopic } from './enums/question-topic.enum';

export interface Question {
  title: string;
  links: string | string[];
  algorithm?: Array<Algorithm>;
  methodology?: Array<Methodology>;
  dataStructure: DataStructure[];
  topics?: QuestionTopic[];
  note: Note;
  difficulty?: string;
  solutions?: string[];
}
