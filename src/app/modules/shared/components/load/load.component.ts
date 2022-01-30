import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss'],
})
export class LoadComponent implements OnInit {
  @Input('isLoading')
  public isLoading: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
