import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: "pages",
  //   loadChildren: () =>
  //     import('./').then(
  //       (m) => m.PreferencesModule
  //     ),
  // },
  // {
  //   path: "",
  //   loadChildren: () =>
  //     import("./components/auth/auth.module").then((m) => m.AuthModule),
  // },
  {
    path: '',
    loadChildren: () => import('./modules/pages.module').then((m) => m.PagesModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
