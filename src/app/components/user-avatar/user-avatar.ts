import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

type Size = 'md' | 'lg';

@Component({
  selector: 'app-user-avatar',
  imports: [NgClass],
  templateUrl: './user-avatar.html',
  styleUrl: './user-avatar.css'
})
export class UserAvatar {
  @Input() firstName: string = 'Arthur';
  @Input() lastName: string = 'Dent';
  @Input() size: Size = 'lg';

  get isSizeMd(): boolean {
    return this.size === 'md';
  }

  get isSizeLg(): boolean {
    return this.size === 'lg';
  }

  get initials(): string {
    return this.firstName.charAt(0) + this.lastName.charAt(0);
  }
}
