import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/project' },
  {path:'project/:slug',component:TaskComponent},
  { path: '**', component: NotFoundComponent },
  { path: 'project', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
