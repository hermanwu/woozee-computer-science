import { Component, OnInit } from '@angular/core';
import { BehaviorQuestion } from './models/bahavior-question.model';

@Component({
  selector: 'app-behaviors',
  templateUrl: './behaviors.component.html',
  styleUrls: ['./behaviors.component.scss'],
})
export class BehaviorsComponent implements OnInit {
  questions: BehaviorQuestion[] = [
    {
      question: 'Do you have any questions for me?',
      thoughts: [
        'Ask interviewee how he got this position',
        'career path',
        'mentorship in the company',
        'how team evaluate success',
        'how team lead help team to grow professionally',
        'How do I succeed in this position?',
        'What is a typical day at work?',
      ],
      tips: [
        'be confident',
        'ask for advice',
        'show you did research on the company: blog, revenue, diversity plan',
        'Ask about your performance: is there anything you want me to elaborate on?',
      ],
    },
    {
      question: 'How do you determine priority for people',
      thoughts: [
        'narrow down the most important thing for team, one item for one person',
        'talk with other people to see if there is any priority matches. Let other people decide and save political capital',
        'Talk and shape priority to your advantage',
      ],
    },
    {
      question: 'What to do if timeline does not meet',
      thoughts: [
        'Always communicate about the deadline',
        'why timeline is important, find a reason. A lot of time it just add overhead to people to worry about.',
        'As long as people perform, should be fine. Make sure people is not slacking or without skill',
        'Make sure there is unrealistic expectation',
        'Unknown unknown is hard to predict, but it is fine as long as planning is done right.',
        'Scope should be small, big scope decrease efficiency and increase unknowns exponentially. small chunk is easy to plan',
        'Speed limit time on planning.',
        'Continue deliver to avoid timeline issue',
      ],
    },
    {
      question: 'How to handle conflicts?',
      thoughts: [
        'Conflicts cannot be avoided',
        'Expand you influence, dont just take what other people give you',
        'Consistent Standard is key to evaluate things between you and other people',
        'Are we shooting the same goal?, can we narrow down goal and balance the goal? Define the goal is important',
        'Understand who is decision maker, accept the fact that something you cannot change. Dont get upset',
        'If not agreement, delay decision making to let people think more.',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
