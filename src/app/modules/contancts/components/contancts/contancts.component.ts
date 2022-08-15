import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contancts',
  templateUrl: './contancts.component.html',
  styleUrls: ['./contancts.component.scss']
})
export class ContanctsComponent implements OnInit {

  @Input() item: unknown;
  constructor() { }

  ngOnInit(): void {
  }

}
