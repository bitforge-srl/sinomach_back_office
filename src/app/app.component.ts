import { Component } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sinomach-admin';
isCollapsed: BooleanInput;

}
