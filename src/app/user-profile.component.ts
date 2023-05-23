import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';
import { UserProfile } from './user-profile.interface';

@Component({
  selector: 'app-user-profile',
  template: `
    <h2>User Profile</h2>
    <div>
      <label>Name:</label> {{ userProfile.name }}
    </div>
    <div>
      <label>Contact:</label> {{ userProfile.contact }}
    </div>
    <div>
      <label>Bio:</label> {{ userProfile.bio }}
    </div>
    <button (click)="editProfile()">Edit Profile</button>
  `
})
export class UserProfileComponent implements OnInit {
  userProfile: UserProfile = {};

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.userProfile = this.profileService.getUserProfile();
  }

  editProfile(): void {
   this.router.navigate(['/edit-profile']);
  }
}
