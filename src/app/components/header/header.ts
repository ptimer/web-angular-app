import { Component } from '@angular/core';
import { SearchInput } from "../search-input/search-input";
import { UserAvatar } from "../user-avatar/user-avatar";

@Component({
  selector: 'app-header',
  imports: [SearchInput, UserAvatar],
  templateUrl: './header.html',
})
export class Header {

}
