import { Component } from '@angular/core';
import { SearchInput } from '../../../components/search-input/search-input';
import { SvgIcon } from "../../../components/svg-icon/svg-icon";

@Component({
  selector: 'app-communication',
  imports: [SearchInput, SvgIcon],
  templateUrl: './communication.html',
  styleUrl: './communication.css'
})
export class Communication {

}
