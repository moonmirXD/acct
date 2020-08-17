import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/guard/auth.guard';


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
    path: 'pages',
    // canActivate: [AuthGuard], // Remove comment when in production mode 
    loadChildren: () => import('./modules/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
