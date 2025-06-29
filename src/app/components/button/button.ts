import { Component, Input } from "@angular/core";
import { Icon, SvgIcon } from "../svg-icon/svg-icon";
import { RouterModule } from "@angular/router";
import { NgClass } from "@angular/common";
import { Link } from "../../../common/types";
import { cn } from "../../../common/utilts";

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
  @Input() customClass?: string;
  @Input() customIconClass?: string;

  get buttonClass(): string {
    return cn(
      'flex gap-15 py-15 px-20 items-center justify-center rounded-4xl cursor-pointer bg-slate-950 text-gray-300', 
      this.isActive && 'bg-blue-500 text-white', this.customClass);
  }

  // TODO: &_use should be replaced
  get iconClass(): string {
    return cn(
      'w-18 h-19 [&_use]:fill-none [&_use]:stroke-blue-500',
      this.isActive && '[&_use]:stroke-white',
      this.customIconClass
    );
  }
}
