import { Component, Input, OnInit } from '@angular/core';
import { BehaviorQuestion } from '../../models/bahavior-question.model';

@Component({
  selector: 'app-question-answer-panel',
  templateUrl: './question-answer-panel.component.html',
  styleUrls: ['./question-answer-panel.component.scss'],
})
export class QuestionAnswerPanelComponent implements OnInit {
  @Input() question: BehaviorQuestion;

  constructor() {}

  ngOnInit(): void {}
}
