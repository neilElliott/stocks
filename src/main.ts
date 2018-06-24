import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// This is the point where the code begins to execute, in this case by executing our AppModule.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
