import { Project } from './../model/project.model';
import { ProjectsService } from './../projects.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'projectTable',
  templateUrl: './projectTable.component.html',
  styleUrls: ['./projectTable.component.scss']
})
export class ProjectTableComponent implements OnInit {
  form: FormGroup;
  @ViewChild('filter', { static: true }) searchInput: ElementRef;
  pagenumber: number = 1;
  totalProjects: number = 0;
  projects: Project[] = [];
  busqueda: string = '';

  constructor(
    public projectsService: ProjectsService,
    public toasterService: ToastrService,
    public router: Router,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      search: [''],
    });

    fromEvent(this.searchInput.nativeElement, 'keyup')
    .subscribe(() => {
        var valores = this.form.getRawValue();
        this.busqueda = valores.search;
        this.getProyects();
    });

    this.getProyects();
  }

  getProyects(){
    var valores = this.form.getRawValue();
    var data = {
      pageNumber: this.pagenumber - 1,
      busqueda: valores.search
    }
    this.projectsService.getProjects(data)
    .subscribe((resp: any) => {
      this.projects = resp.projects;
      this.totalProjects = resp.total;
    });
  }

  deleteProject(id: any){
    Swal.fire({
      title: 'Are you sure you want to delete the project?',
      text: 'This action cannot be reversed',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        this.projectsService.deleteProject(id)
        .subscribe((resp: any) => {
          this.getProyects()
          this.toasterService.success('Project deleted', 'Successful');
        }, err => {
          this.toasterService.error('Error', 'Operation unsuccessful');
        });
      } else {
        Swal.close();
      }

    });
  }

  pageChanged(page){
    this.pagenumber = page,
    this.getProyects();
  }

  editProject(id: any){
    this.router.navigate(['/createProject/'+ id]);
  }

}
