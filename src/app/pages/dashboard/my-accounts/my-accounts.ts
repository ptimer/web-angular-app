import { Component } from '@angular/core';
import { SearchInput } from "../../../components/search-input/search-input";
import { SvgIcon } from '../../../components/svg-icon/svg-icon';

@Component({
  selector: 'app-my-accounts',
  imports: [SearchInput, SvgIcon],
  templateUrl: './my-accounts.html',
  styleUrl: './my-accounts.css'
})
export class MyAccounts {

}
