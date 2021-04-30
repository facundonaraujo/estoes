import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from './model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements Resolve<any>{
  routeParams: any;
  project: Project = new Project();

  constructor(
    public http: HttpClient,
  ) { }

  getProjects(pageNumber: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.urlServices + '/projects/';
    return this.http.post(url, pageNumber, {headers});
  }

  getUsers() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.urlServices + '/usuarios/';
    return this.http.get(url, {headers});
  }

  deleteProject(id: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.urlServices + '/project/' + id;
    return this.http.delete(url, {headers});
  }

  getProjectId(id: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.urlServices + '/project/' + id;
    return this.http.get(url, {headers});
  }

  addProject(project: Project){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let url = environment.urlServices + '/project';
    if (project._id !== '' && project._id !== null && project._id !== undefined){
      url += '/' + project._id;
      return this.http.put(url, project, {headers});
    }
    else{
      return this.http.post(url, project, {headers});
    }
  }

  getProject(): Promise<any>{
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      if(this.routeParams.id === "new"){
        this.project = new Project();
        resolve(this.project);
      }else{
        this.http.get(environment.urlServices + '/project/' + this.routeParams.id, {headers})
          .subscribe((response: any) => {
            this.project = response.project;
            resolve(response.project);
          }, reject);
      }
    });
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;
    return new Promise<void>((resolve, reject) => {
      Promise.all([
        this.getProject(),
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }
}