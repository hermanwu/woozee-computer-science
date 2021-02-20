import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-behaviors',
  templateUrl: './behaviors.component.html',
  styleUrls: ['./behaviors.component.scss'],
})
export class BehaviorsComponent implements OnInit {
  questions = [
    {
      question: 'Do you have any questions for me?',
      answers: [
        'Ask interviewee how he got this position',
        'career path',
        'mentorship in the company',
        'how team evaluate success',
        'how team lead help team to grow professionally',
        'How do I succeed in this position?',
        'What is a typical day at work?',
      ],
      tricks: [
        'be confident',
        'ask for advice',
        'show you did research on the company: blog, revenue, diversity plan',
        'Ask about your performance: is there anything you want me to elaborate on?',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
