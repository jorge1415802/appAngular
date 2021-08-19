import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';



@NgModule({
  declarations: [ProjectsComponent, AddComponent, EditComponent],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
