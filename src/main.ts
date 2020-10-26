import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment } from '@env/environment';
import { hmrBootstrap } from './hmr';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  //lert("Prod mode ligado");
  enableProdMode();
}
const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  /// pega as variáveis de ambient do environments
  hmrBootstrap(module, bootstrap);
} else {
  bootstrap().catch((err) => console.error(err));
}
