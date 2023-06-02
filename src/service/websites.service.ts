import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsitesService {

  constructor() { }

  getSportWebsites() { // https://themeforest.net
    return [
      {
        id: '000001',
        name: 'Bitbetio - Sport Betting',
        description: `Con su sitio web de aspecto profesional, está mostrando lo que puede
        hacer como empresa, mejorando así su rendimiento comercial general.
        Es por eso que su sitio debe tener un aspecto fresco e impresionante
        en todo momento, de lo contrario, su empresa será absorbida por
        poderosos competidores.`,
        image: 'https://themeforest.img.customer.envatousercontent.com/files/374833382/screenshot/000_image-%20preview1.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=a563a8800b0a4220c88b398a90951961',
        price: 49,
        category: 'Sports',
        quantity: 1,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        website: 'https://pixner.net/bitbetio/main/index.html'
      },
      {
        id: '000002',
        name: 'Sporty',
        description: `Sporty es un tema de club deportivo de wordpress receptivo. Es
        adecuado para clubes deportivos de fútbol, fútbol, fútbol americano,
        baloncesto, béisbol, rugby, voleibol, hockey sobre hielo, balonmano,
        cricket, etc.`,
        image: 'https://themeforest.img.customer.envatousercontent.com/files/243479606/01_poster.__large_preview.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=c59ec7517c5a51f88461a9d063d392c8',
        price: 49,
        category: 'Sports',
        quantity: 1,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        website: 'https://preview.themeforest.net/item/sportyresponsive-wordpress-theme-for-sport-clubs/full_screen_preview/7517792?_ga=2.97993759.1422415606.1685414772-1818668741.1685414772&_gac=1.95213678.1685414772.Cj0KCQjwmtGjBhDhARIsAEqfDEeMVD6AXcdPCIERl-d7X_1lvdUauARVesVngShhfOVgQTg5nvjSTecaAnqKEALw_wcB'
      },
      {
        id: '000003',
        name: 'The League',
        description: `The League es el principal tema de noticias deportivas para
        WordPress. Agregue un nivel instantáneo e innegable de credibilidad
        y profesionalismo a su sitio de noticias deportivas o blog con
        compatibilidad con SportsPress, un marcador personalizado, 8 diseños
        de artículos, 4 diseños de publicaciones destacadas, capacidad de
        respuesta móvil, acceso a más de 800 fuentes de Google y mucho más
        ¡más, incluido Theia Post Slider y Theia Sticky Sidebar incluidos
        sin cargo adicional!`,
        image: 'https://themeforest.img.customer.envatousercontent.com/files/222030849/Previews/01_preview1.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=61da6f89ee70c0b994abd91e526d8ea1',
        price: 39,
        category: 'Sports',
        quantity: 1,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        website: 'http://preview.themeforest.net/item/the-league-sports-news-magazine-wordpress-theme/full_screen_preview/19488138?_ga=2.97993759.1422415606.1685414772-1818668741.1685414772&_gac=1.95213678.1685414772.Cj0KCQjwmtGjBhDhARIsAEqfDEeMVD6AXcdPCIERl-d7X_1lvdUauARVesVngShhfOVgQTg5nvjSTecaAnqKEALw_wcB'
      },
      {
        id: '000004',
        name: 'Real Soccer',
        description: `Real Soccer es un tema responsivo de Wordpress, especialmente para
        fútbol, fútbol, clubes deportivos. Viene con excelentes funciones de
        fútbol, como la lista de jugadores, la tabla de la liga, el perfil
        del jugador, los partidos y los resultados, etc.`,
        image: 'https://themeforest.img.customer.envatousercontent.com/files/423539845/preview/01_intro.__large_preview.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=2a5f43d06a1c47bb46e75c03eb240f0c',
        price: 59,
        category: 'Sports',
        quantity: 1,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        website: 'https://preview.themeforest.net/item/real-soccer-sport-clubs-responsive-wp-theme/full_screen_preview/8888574?_ga=2.58632618.1422415606.1685414772-1818668741.1685414772&_gac=1.56997592.1685414772.Cj0KCQjwmtGjBhDhARIsAEqfDEeMVD6AXcdPCIERl-d7X_1lvdUauARVesVngShhfOVgQTg5nvjSTecaAnqKEALw_wcB'
      },
      {
        id: '000005',
        name: 'Sports Club',
        description: `Sports Club: fútbol, fútbol, ​​el tema de WordPress para noticias
        deportivas es la mejor solución para un sitio web de deportes, como
        un sitio de un equipo de fútbol, béisbol o fútbol, eventos y juegos
        deportivos, revista de noticias deportivas en línea, clubes y
        secciones deportivas para niños, etc.`,
        image: 'https://themeforest.img.customer.envatousercontent.com/files/262652230/01_sports-club-preview.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=dfae9cb19e2a012874bd8355386f3ae1',
        price: 59,
        category: 'Sports',
        quantity: 1,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        website: 'http://preview.themeforest.net/item/sports-club-football-soccer-sport-news-theme/full_screen_preview/13841253?_ga=2.95175068.1422415606.1685414772-1818668741.1685414772&_gac=1.183500372.1685414772.Cj0KCQjwmtGjBhDhARIsAEqfDEeMVD6AXcdPCIERl-d7X_1lvdUauARVesVngShhfOVgQTg5nvjSTecaAnqKEALw_wcB'
      },
    ]
  }

  getProductsSportWebsites() {
    return Promise.resolve(this.getSportWebsites());
  }
}
