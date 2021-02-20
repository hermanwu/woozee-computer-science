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
  ];
}
