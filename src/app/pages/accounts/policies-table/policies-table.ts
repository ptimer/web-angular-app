import { Component } from '@angular/core';
import { SearchInput } from '../../../components/search-input/search-input';
import { SvgIcon } from '../../../components/svg-icon/svg-icon';

@Component({
  selector: 'app-policies-table',
  imports: [SearchInput, SvgIcon],
  templateUrl: './policies-table.html',
  styleUrl: './policies-table.css'
})
export class PoliciesTable {

}
