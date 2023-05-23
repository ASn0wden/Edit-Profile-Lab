import { Injectable } from '@angular/core';
import { UserProfile } from './user-profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private userProfile: UserProfile = {
    name: 'Marley Bean',
    contact: 'MBean@gmail.com',
    bio: 'I am a freeloader, with a mean slide tackle.'
  };

  getUserProfile(): UserProfile {
    return this.userProfile;
  }

  setUserProfile(profile: UserProfile): void {
    this.userProfile = profile;
  }
}