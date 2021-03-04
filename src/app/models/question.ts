import { Note } from 'woozee-lib/lib/data-structure/note';
import { Algorithm } from './enums/algorithm.enum';
import { DataStructure } from './enums/data-structure.enum';

export interface Question {
  title: string;
  links: string | string[];
  algorithm: Array<Algorithm>;
  dataStructure: DataStructure[];
  note: Note;
}
