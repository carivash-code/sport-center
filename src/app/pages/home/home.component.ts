import { Component, OnInit } from '@angular/core';
import { WebsitesService } from 'src/service/websites.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  responsiveOptions: any[] = [];
  priceMXN = '';

  constructor(private serviceWebsites: WebsitesService) {}

  ngOnInit(): void {
    this.serviceWebsites.getProductsSportWebsites().then((product) => {
      this.products = product;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1440px',
        numVisible: 2,
        numScroll: 2
      },
      {
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '425px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  getSeverity(status: string): string {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'None';
    }
  }

  currencyCalculate(price: number): string {
    const priceConverted = price * 17.53;
    return priceConverted.toFixed(2);
  }

  openWebsite(url: string) {
    window.open(url, '_blank');
  }
}
