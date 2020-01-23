import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'electron-angular';

  constructor(private message: NzMessageService) {}

  onClick() {
    this.message.success('You\'re welcome!')
  }
}
