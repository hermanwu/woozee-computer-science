import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Computer Science';

  routes = [
    {
      name: '行为类面试题',
      route: 'behavior',
    },
    {
      name: 'API design',
      route: 'api-design',
    },
    {
      name: 'Design System',
      route: 'design-system',
    },
    {
      name: '数据结构',
      route: 'data-structure',
    },
    {
      name: '算法',
      route: 'algorithm',
    },
    {
      name: '算法',
      route: 'algorithm',
    },
    {
      name: '前端开发',
      route: 'front-end',
    },
    {
      name: '简历Tips',
      route: 'resume-tips',
    },
  ];
}
