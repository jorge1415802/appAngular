import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './projects/components/add/add.component';
import { EditComponent } from './projects/components/edit/edit.component';
import { ProjectsComponent } from './projects/pages/projects/projects.component';

const routes: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'add', component:AddComponent},
  {path: 'edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
