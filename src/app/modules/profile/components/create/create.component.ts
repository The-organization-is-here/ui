import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  Validators
} from "@angular/forms";
import { ProfileService } from "../../service/profile-service.service";
import {HttpClient} from "@angular/common/http";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Profile} from "../../models/profile.model";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  tagsArray: string[];

  profile: Profile;

  createProfileForm = this.fb.group({
    firstName: ['', [Validators.required, this.profileService.forbiddenNameValidator]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    description: [''],
    password: ['', [Validators.required, this.profileService.validPassword]],
    tags: this.fb.array([])
  });

  constructor(private fb: FormBuilder, private profileService: ProfileService) {
    this.tagsArray = []
  }

  ngOnInit(): void {
    this.createProfileForm.valueChanges.subscribe(x => {
      console.log(x);
    })
  }

  createProfile(): void {
    this.profile = this.createProfileForm.value;
    this.profileService.createProfile(this.profile)
  }

  getErrorMessage(field: string) {
    return this.createProfileForm.get(field) ? 'Not a valid field' : '';
  }

  tags() {
    return this.createProfileForm.get("tags") as FormArray;
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tagsArray.push(value);
      this.tags().push(this.fb.control(value));
    }
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.tagsArray.indexOf(tag);

    if (index >= 0) {
      this.tagsArray.splice(index, 1);
      this.tags().removeAt(index);
    }
  }

}
