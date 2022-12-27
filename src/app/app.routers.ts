import { AboutComponent } from './components/about/about.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component:TasksComponent},
  { path: 'about', component:AboutComponent},
]
