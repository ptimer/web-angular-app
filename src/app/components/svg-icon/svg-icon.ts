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
  'exclamation-mark' |
  'ship' |
  'guard-check' |
  'guard-user' |
  'umbrella' |
  'check' |
  'arrow-bottom' |
  'arrow-top' |
  'rocket' |
  'clip'

@Component({
  selector: 'app-svg-icon',
  imports: [],
  templateUrl: './svg-icon.html',
  styleUrls: [ './svg-icon.css' ]
})
export class SvgIcon  {
  @Input()
  icon: Icon = 'building';

  get href() {
    return `/assets/svg/sprite.svg#${this.icon}`;
  }
}
