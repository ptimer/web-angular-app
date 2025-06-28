import { Component, Input } from '@angular/core';
import { Icon, SvgIcon } from '../svg-icon/svg-icon';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Link } from '../../../shared/types';

@Component({
  selector: 'app-button',
  imports: [NgClass, SvgIcon, RouterModule],
  templateUrl: './button.html',
})
export class Button {
  @Input() label: string = '';
  @Input() icon?: Icon;
  @Input() routerLink?: Link | Link[];
  @Input() isActive: boolean = false;
}
