import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.scss']
})
export class JobDescriptionComponent implements OnInit {

  constructor() { }

  @Input()  jobName: string;

  @Input()  companyName: string;

  @Input()  jobDescription: string;

  @Input()  requirementsDescription: string;

  @Input()  salaryAndBenefits: string;

  ngOnInit(): void {
  }

}
