import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  
  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label: 'Nuestra liga',
              icon: 'pi pi-building',
              items: [
                  {
                      label: 'Equipos',
                      icon: 'pi pi-star-fill',
                      items: [
                          {
                              label: 'Equipo #1',
                              icon: 'pi pi-tag'
                          },
                          {
                              label: 'Equipo #2',
                              icon: 'pi pi-tag'
                          }
                      ]
                  },
                  {
                      label: 'Ligas',
                      icon: 'pi pi-users'
                  }
              ]
          },
          {
              label: 'Juegos de la semana',
              icon: 'pi pi-table',
              items: [
                  {
                      label: 'Semana #1',
                      icon: 'pi pi-calendar'
                  },
                  {
                      label: 'Semana #2',
                      icon: 'pi pi-calendar'
                  },
                  {
                      label: 'Semana #3',
                      icon: 'pi pi-calendar'
                  },
                  {
                      label: 'Semana #4',
                      icon: 'pi pi-calendar'
                  }
              ]
          },
          {
              label: 'Multimedia',
              icon: 'pi pi-fw pi-user',
              items: [
                  {
                      label: 'Videos',
                      icon: 'pi pi-video'
                  },
                  {
                      label: 'Imágenes',
                      icon: 'pi pi-fw pi-image'
                  }
              ]
          },
          {
              label: 'Noticias',
              icon: 'pi pi-fw pi-book'
          },
          {
              label: 'Contáctanos',
              icon: 'pi pi-fw pi-comments'
          }
      ];
  }
}