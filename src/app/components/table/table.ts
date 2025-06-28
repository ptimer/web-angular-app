import { Component, Input } from '@angular/core';
import { SvgIcon } from "../svg-icon/svg-icon";
import { UserAvatar } from "../user-avatar/user-avatar";
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [SvgIcon, NgFor, NgClass, UserAvatar],
  templateUrl: './table.html',
})
export class Table {
  @Input() data: any[] = [];

  getInitials(fullName: string): string {
  return fullName
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
}

}
