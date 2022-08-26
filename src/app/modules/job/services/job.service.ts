import { Injectable } from '@angular/core';
import {Job} from "../models/job.model";
import {map, merge, mergeMap, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  search(searchString: string):Job[] {
    return this.getJobs()
        .filter(job => {
            console.log(job);
            console.log(searchString);
            return job.jobName.toLowerCase().includes(searchString.toLowerCase());
        });

  }

  private getJobs() :Job[] {
    return Array.of(this.addJob("test1","test1"),
        this.addJob("test2","test2"),
        this.addJob("test3","test3"));
  }

  private addJob(jobName:string, companyName:string) :Job {
    let job = new Job();
    job.jobName = jobName;
    job.companyName = companyName;
    return job;
  }
}
