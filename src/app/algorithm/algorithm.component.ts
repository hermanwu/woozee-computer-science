import { Component, OnInit } from '@angular/core';
import { problems } from '../data/algorithm';
@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.scss'],
})
export class AlgorithmComponent implements OnInit {
  problems = problems;

  constructor() {}

  ngOnInit(): void {}
}
