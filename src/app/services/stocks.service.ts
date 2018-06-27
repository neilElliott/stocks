import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// variables:
// list of stock symbols
const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
// stock API endpoint URL
const service = 'https://angular2-in-action-api.herokuapp.com';

/**
 * Interface exported for other components to use.
 * Ensures the date remains consistent. Matches JSON return object provided by API. e.g.
 * [{"symbol":"GOOG","lastTradePriceOnly":1118.46,"change":-6.3500977,"changeInPercent":-0.005645484}]
 */
export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

// Decorator used by Angular to setup the proper wiring. Can be injected into a constructor like HttpClient below.
@Injectable({
  providedIn: 'root'
})
export class StocksService {
  // Inject HttpClient as a private class variable (declared in the constructor arg.
  constructor(private http: HttpClient) {}

  /**
   * Returns a copy(slice) of the current value of the stocks array.
   * @returns {string[]}
   */
  get() {
    return stocks.slice();
  }

  /**
   * Adds the provided stock to the stocks array and returns the newly modified value (array) as a copy.
   * @param stock
   * @returns {string[]}
   */
  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  /**
   * Drops or removes(splice) the provided stock from the array of stocks and returns the newly modified
   * value (array) as a copy.
   * @param stock
   * @returns {string[]}
   */
  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  /**
   * Calls the HttpClient service to load the data for the current stock price values (stocks array).
   * The HttpClient service returns an observable, the construct for handling asynchronous events, such
   * as the data from the API call.
   * @param symbols
   * @returns {Observable<Array<StockInterface>>}
   */
  load(symbols) {
    // <Array<StockInterface>> tells the get method to know what type of object to expect, in this case from
    // the API. Optional, but can determine errors at compile time.
    return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
  }
}
