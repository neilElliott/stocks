import { Component } from '@angular/core';

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

  // A property rendered in the HTML template app.component.html {{ title }} placeholder.
  // This is a common convention for binding a value between the template and the component.
  title = 'app';
}
