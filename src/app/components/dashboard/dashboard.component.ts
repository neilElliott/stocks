import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from '../../services/stocks.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Property to maintain loaded stock data.
  stocks: Array<StockInterface>;
  symbols: Array<string>;

  /**
   * Runs on component creation.
   * @param {StocksService} service
   */
  constructor(private service: StocksService) {
    /*
     * Request the current list of stock symbols. Don't load data from the service in the
     * constructor, because it is created early in the rendering of a component, and values
     * are often not ready to be consumed. Better to use the on init method lifecycle hook below.
     */
    this.symbols = service.get();
  }

  /**
   * ngOnInit is called right after the directive's data-bound properties have been checked
   * for the first time, and before any of its children have been checked. It is invoked only
   * once when the directive is instantiated.
   */
  ngOnInit() {
    // call stock service to get the stock data.
    // subscribe, async request using the observable approach to wait for the results
    // from the service and load into the stocks property.
    this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }

}
