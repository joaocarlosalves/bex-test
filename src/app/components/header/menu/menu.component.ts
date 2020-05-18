import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: any = [
    'Menu 1',
    'Menu 2',
    'Menu 3'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
