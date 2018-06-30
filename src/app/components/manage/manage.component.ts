import { Component } from '@angular/core';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {

  symbols: Array<string>;
  // Hold the value of the form input.
  stock: string;

  /**
   * Get the current list of symbols during class instantiation.
   * Doesn't require the lifecycle hook, because it's a synchronous request
   * to the get list of stocks in memory.
   * @param {StocksService} service
   */
  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  /**
   * Add a new stock to the list
   */
  add() {
    // Remember, the service returns a copy of the symbols list.
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = '';
  }

  /**
   * Remove a stock from the list
   * @param symbol
   */
  remove(symbol) {
    // Remember, the service returns a copy of the symbols list.
    this.symbols = this.service.remove(symbol);
  }

}
