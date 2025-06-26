import { Component } from '@angular/core';
import { SvgIcon } from "../svg-icon/svg-icon";
import { UserAvatar } from "../user-avatar/user-avatar";

@Component({
  selector: 'app-table',
  imports: [SvgIcon, UserAvatar],
  templateUrl: './table.html',
})
export class Table {

}
