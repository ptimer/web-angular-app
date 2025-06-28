import { Component } from '@angular/core';
import { ProgressBarComponent } from "../../../components/progress-bar/progress-bar";
import { SvgIcon } from "../../../components/svg-icon/svg-icon";

@Component({
  selector: 'app-account-details',
  imports: [ProgressBarComponent, SvgIcon],
  templateUrl: './account-details.html',
  styleUrl: './account-details.css'
})
export class AccountDetails {

}
