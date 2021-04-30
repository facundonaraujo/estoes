import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Project } from '../model/project.model';
import { User } from '../model/users.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})
export class CreateprojectComponent implements OnInit {
  users: User[] = [];
  project: Project = new Project();
  form: FormGroup;
  
  constructor(
    public projectsService: ProjectsService,
    private _formBuilder: FormBuilder,
    public toasterService: ToastrService,
  ) { 
    this.getUsers();
  }

  ngOnInit() {
    this.project = this.projectsService.project;

    this.form = this._formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      projectManager: ['', Validators.required],
      assignedTo: ['', Validators.required],
      status: ['true', Validators.required],
      created: [''],
      _id: [''],
    });

    if (this.project?._id !== null && this.project?._id !== undefined && this.project?._id !== '') {
      this.inicializaFormulario();
      console.log('object :>> ', new Date(this.project.created).toLocaleDateString()+ ' '+ new Date(this.project.created).toLocaleTimeString());
    }
  }

  inicializaFormulario() {
    this.form.get('nombre').setValue(this.project?.nombre);
    this.form.get('descripcion').setValue(this.project?.descripcion);
    this.form.get('projectManager').setValue(this.project?.projectManager);
    this.form.get('assignedTo').setValue(this.project?.assignedTo);
    this.form.get('status').setValue(this.project?.status);
    this.form.get('created').setValue(this.project?.created);
    this.form.get('_id').setValue(this.project?._id);
  }

  getUsers(){
    this.projectsService.getUsers()
    .subscribe((resp: any) => {
      this.users = resp.usuarios;
    });
  }

  createProject(){
    Swal.fire({
      title: 'Are you sure you want to create the project?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Create',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        let valores = this.form.getRawValue();
        this.projectsService.addProject(valores)
        .subscribe((resp: any) => {
          this.project = resp.project;
          this.inicializaFormulario();
          this.toasterService.success('Project created', 'Successful');
        }, err => {
          console.log('err :>> ', err);
            this.toasterService.error('Error', 'Operation unsuccessful');
        });
      } else {
        Swal.close();
      }

    });
  }

}
