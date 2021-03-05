import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-problem-table',
  templateUrl: './problem-table.component.html',
  styleUrls: ['./problem-table.component.scss'],
})
export class ProblemTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  @Input() problems: Array<Question>;
  readonly columnsToDisplay = [
    'title',
    'algorithm',
    'data-structure',
    'question-topic',
  ];

  dataSource = new MatTableDataSource<any>();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.data = this.problems;
    this.dataSource.sort = this.sort;
  }
}
