import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileService } from './profile.service';
import { UserProfile } from './user-profile.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-profile',
  template: `
    <h2>Edit Profile</h2>
    <form [formGroup]="editProfileForm" (ngSubmit)="saveProfile()">
      <div>
        <label>Name:</label>
        <input type="text" formControlName="name">
      </div>
      <div>
        <label>Contact:</label>
        <input type="text" formControlName="contact">
      </div>
      <div>
        <label>Bio:</label>
        <textarea formControlName="bio"></textarea>
      </div>
      <button type="submit">Save</button>
    </form>
  `
})
export class EditProfileComponent implements OnInit {
  editProfileForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private profileService: ProfileService, 
    private router: Router) {}


  ngOnInit(): void {
    const userProfile = this.profileService.getUserProfile();

    this.editProfileForm = this.formBuilder.group({
      name: [userProfile.name],
      contact: [userProfile.contact],
      bio: [userProfile.bio]
    });
  }

  saveProfile(): void {
    if (this.editProfileForm.valid) {
      const updatedProfile: UserProfile = {
        name: this.editProfileForm.value.name,
        contact: this.editProfileForm.value.contact,
        bio: this.editProfileForm.value.bio
      };

      this.profileService.setUserProfile(updatedProfile);
    }
  }
}
