import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { ProjectTableComponent } from './projectTable/projectTable.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsService } from './projects.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { PipesModule } from '../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'projects'
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projects/createProject/:id',
    component: CreateprojectComponent,
    resolve: {
      data: ProjectsService
    }
  },

];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    ToastrModule,
    PipesModule
  ],
  declarations: [
    ProjectsComponent,
    CreateprojectComponent,
    ProjectTableComponent
  ],
  providers : [
    ProjectsService
  ],
})
export class ProjectsModule { }
