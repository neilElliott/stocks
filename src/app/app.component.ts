import { Component } from '@angular/core';
import { StocksService, StockInterface } from './services/stocks.service';

/**
 * The @Component annotation declares that this class, AppComponent, is a component by accepting an object,
 * of three properties:
 * selector: the HTML selector to use this component <app-root>. See it used in index.html
 * templateUrl: the link to the HTML template used by this component.
 * styleUrls: An array of style sheet links used by this component.
 * *others properties: ...
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // A property rendered in the HTML template app.component.html {{ stocks }} placeholder.
  // This is a common convention for binding a value between the template and the component.

  // Property to maintain loaded stock data.
  stocks: Array<StockInterface>;

  constructor(service: StocksService) {
    // call stock service to get the stock data.
    service.load(['AAPL']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
}
