import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzMessageModule, NzButtonModule } from 'ng-zorro-antd';


const components = [
  NzEmptyModule,
  NzMessageModule,
  NzButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...components
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
