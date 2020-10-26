import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'about', /// ao fazer isso e lazy loading
    loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'list-example',
    loadChildren: () => import('./list-example/list-example.module').then((m) => m.ListExampleModule),
  },
  {
    path: 'post-list',
    loadChildren: () => import('./post-list/post-list.module').then((m) => m.PostListModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })], /// carrega o about apos carregar o main
  //imports: [RouterModule.forRoot(routes)], /// não carrega o about  e deixa para carregar no runtime (pode dar delay de runtime)
  // podemos tb fazer load das que estao na pagina mas isso eh uma lib a parte
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
