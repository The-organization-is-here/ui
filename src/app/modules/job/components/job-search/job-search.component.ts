import { Component, OnInit } from '@angular/core';
import {JobService} from "../../services/job.service";
import {Job} from "../../models/job.model";
import {
  debounceTime,
  defer,
  distinctUntilChanged, map,
  merge, mergeMap,
  Observable,
  of,
  share, startWith,
  switchMap
} from "rxjs";
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})
export class JobSearchComponent implements OnInit {

  constructor(private jobService: JobService,
              private formBuilder: FormBuilder) { }

  jobs: Job[];

  public searchControl: FormControl;

  public areNoResultsFound: boolean;

  ngOnInit(): void {
    this.searchControl = this.formBuilder.control("");


    this.searchControl.valueChanges.pipe(
        map(value => this.jobService.search(value)
    )).subscribe(value => {
      console.log(value);
      this.jobs = value;
      this.areNoResultsFound = this.jobs.length === 0;
    });
  }

}
