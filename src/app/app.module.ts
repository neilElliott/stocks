import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import the stocks service and the HttpClientModule (used in the service) so it can be registered in the
// application below.
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Manually added services
import { StocksService } from './services/stocks.service';

// Imports the newly CLI generated 'main' app component.
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';

/**
 * The packaging that tells Angular what's available to render. A module describes the various dependencies
 * that are needed to render the module.
 *
 * NgModule decorator accepts an object (like Component) declaring different properties
 */
@NgModule({
  // List of components and directives used by the entire application.
  declarations: [
    AppComponent, // CLI generated "main" app component. Other components added here.
    SummaryComponent,
    DashboardComponent,
    ManageComponent
  ],
  // List of other modules used in the app. This list can consist of own created, or third party.
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  // List of services used in the app.
  providers: [StocksService],
  // Declares which component to use as the first to bootstrap the application. Typically, this will be
  // the same App component (already set up by CLI).
  // angular.json contains "main": "src/main.ts" which defines the bootstrap which calls the main.ts as the
  // first set of instructions to be executed.
  bootstrap: [AppComponent]
})
// Export and empty class which gets annotated with the configuration from NgModule.
export class AppModule { }
