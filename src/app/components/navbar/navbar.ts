import { Component, signal } from '@angular/core';
import { Icon, SvgIcon } from '../svg-icon/svg-icon';
import { Router, RouterModule } from '@angular/router';
import { Button } from '../button/button';
import { Link } from '../../../shared/types';

interface MenuItem {
  label: string;
  icon: Icon;
  link: Link | Link[];
}

const MENU_ITEMS: MenuItem[] = [
  { label: 'Dashboard', icon: 'house', link: ['/', '/dashboard'] },
  { label: 'Accounts', icon: 'database', link: '/accounts' },
  { label: 'Brokers', icon: 'people', link: '/brokers' },
  { label: 'Submissions', icon: 'document', link: '/submissions' },
  { label: 'Organizations', icon: 'building', link: '/organizations' },
  { label: 'Admin', icon: 'key', link: '/admin' },
];

@Component({
  selector: 'app-navbar',
  imports: [SvgIcon, RouterModule, Button],
  templateUrl: './navbar.html',
})
export class Navbar {
  menuItems = signal(MENU_ITEMS);

  constructor(private router: Router) {}

  isActive(link: Link | Link[]): boolean {
    if (Array.isArray(link)) {
      return link.includes(this.router.url);
    }

    return this.router.url === link;
  }

  // using last link in array
  handleLink(link: Link | Link[]): Link {
    return Array.isArray(link) ? link[link.length-1] : link;
  }
}
