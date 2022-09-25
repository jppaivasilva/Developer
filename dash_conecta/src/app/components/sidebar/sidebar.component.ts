import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Perfil Usuário',  icon:'person', class: '' },
    { path: '/table-list', title: 'Tabelas/Listas',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Tipografia',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icones',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Mapas',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notificaçõess',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Torne-se Full',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
