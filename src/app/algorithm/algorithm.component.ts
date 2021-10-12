import { Component, OnInit } from '@angular/core';
import { problems } from '../data/algorithm-questions/algorithm';
import { Algorithm } from '../models/enums/algorithm.enum';
import { Methodology } from '../models/enums/methodology.enum';
import { QuestionTopic } from '../models/enums/question-topic.enum';
@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.scss'],
})
export class AlgorithmComponent implements OnInit {
  topics = Object.values(QuestionTopic);
  methodologies = Object.values(Methodology);
  algorithms = Object.values(Algorithm);

  problems = problems;

  constructor() {}

  ngOnInit(): void {}
}
