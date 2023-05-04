import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ReachoutComponent } from './components/reachout/reachout.component';
import { TechstackComponent } from './components/techstack/techstack.component';

const routes: Routes = [

  { path: 'profile', component: ProfileComponent, data: { animation: 'atTop' } },
  { path: 'about', component: AboutComponent, data: { animation: 'one' } },
  { path: 'tech', component: TechstackComponent, data: { animation: 'two' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'three' } },
  { path: 'reach', component: ReachoutComponent, data: { animation: 'atLast' } },  
  { path:'', redirectTo: 'profile', pathMatch: 'full'},
  { path:'**', redirectTo: 'profile', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
