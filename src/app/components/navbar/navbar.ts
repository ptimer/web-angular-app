import { Component, signal } from '@angular/core';
import { Icon, SvgIcon } from '../svg-icon/svg-icon';
import { Router, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

interface MenuItem {
  label: string;
  icon: Icon;
  link: string;
}

const MENU_ITEMS: MenuItem[] = [
  { label: 'Dashboard', icon: 'house', link: '/dashboard' },
  { label: 'Accounts', icon: 'database', link: '/accounts' },
  { label: 'Brokers', icon: 'people', link: '/brokers' },
  { label: 'Submissions', icon: 'document', link: '/submissions' },
  { label: 'Organizations', icon: 'building', link: '/organizations' },
  { label: 'Admin', icon: 'key', link: '/admin' },
];

@Component({
  selector: 'app-navbar',
  imports: [SvgIcon, RouterModule, NgClass],
  templateUrl: './navbar.html',
})
export class Navbar {
  menuItems = signal(MENU_ITEMS);

  constructor(private router: Router) {}

  isActive(link: string): boolean {
    return this.router.url === link;
  }
}
