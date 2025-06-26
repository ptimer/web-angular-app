import { Component, Input } from '@angular/core';

export type Icon = 
  'building' | 
  'database' | 
  'document' | 
  'house' | 
  'key' | 
  'people' | 
  'target' | 
  'arrow-left' | 
  'arrow-right' |
  'three-dots' |
  'wide-arrow-bottom' |
  'wide-arrow-top' |
  'none';

@Component({
  selector: 'app-svg-icon',
  imports: [],
  templateUrl: './svg-icon.html',
  styleUrls: [ './svg-icon.css' ]
})
export class SvgIcon  {
  @Input()
  icon: Icon = 'none';

  get href() {
    return `/assets/svg/sprite.svg#${this.icon}`;
  }
}
