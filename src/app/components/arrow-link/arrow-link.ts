import { Component, Input } from '@angular/core';
import { SvgIcon } from '../svg-icon/svg-icon';

@Component({
  selector: 'app-arrow-link',
  imports: [SvgIcon],
  templateUrl: './arrow-link.html',
  styleUrl: './arrow-link.css'
})
export class ArrowLink {
  @Input() label: string = "Review details";
  @Input() href: string = "#";
}
