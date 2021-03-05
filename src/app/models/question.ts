import { Note } from 'woozee-lib/lib/data-structure/note';
import { Algorithm } from './enums/algorithm.enum';
import { DataStructure } from './enums/data-structure.enum';
import { QuestionTopic } from './enums/question-topic.enum';

export interface Question {
  title: string;
  links: string | string[];
  algorithm: Array<Algorithm>;
  dataStructure: DataStructure[];
  topics?: QuestionTopic[];
  note: Note;
}
