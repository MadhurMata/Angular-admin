import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'Promises', url: 'promises' },
        { title: 'Progress', url: 'progress' },
        { title: 'Graph', url: 'graph1' },
        { title: 'Rxjs', url: 'rxjs' }
      ]
    }
  ];

  constructor() { }
}
