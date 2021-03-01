import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { DataStore } from 'aws-amplify';
import { Project } from 'src/models';
import { APIService } from './API.service';
import Amplify from "@aws-amplify/core";
import { DataStore } from '@aws-amplify/datastore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  projects: any = [];
  createForm!: FormGroup;
  isCollapsed = false;
  allProjects: Project[] | undefined;
  isVisible = false;

  // private routeSub: any;
  // slug:string=""

  slug: any = ""

  constructor(private api: APIService, private fb: FormBuilder, private route: ActivatedRoute, public router: Router) {

  }

  // ngOnDestroy() {
  //   this.routeSub.unsubscribe();
  // }

  onGetTodo(id: Number) {
    return this.projects.find((x: any) => x.id === id);
  }
  async ngOnInit() {

    const subscription = DataStore.observe(Project).subscribe(msg => {
      console.log(msg.model, msg.opType, msg.element);

      this.getAllProjects();
    });

    this.createForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
    });

    this.getAllProjects();

    // this.routeSub = this.route.params.subscribe(params => {
    //   console.log(params)
    //   this.slug = params['slug']
    //   console.log(this.slug)
    // });

  }

  // async onCreate(project: Project) {

  //   await DataStore.save(new Project(project));
  // }

  public onCreate(project: Project) {
    this.api.CreateProject(project).then(event => {
      console.log('item created!');
      this.createForm.reset();
      console.log(project)
    })
      .catch(e => {
        console.log('error creating project...', e);
      });
  }

  // public onCreate(project: Project) {
  //     try {
  //        DataStore.save(project);
  //       console.log("Project saved successfully!");
  //     } catch (error) {
  //       console.log("Error saving  project", error);
  //     } 
  // }

  showModal(): void {
    this.isVisible = true;
  }

  async getAllProjects() {
    this.allProjects = await DataStore.query(Project);
    console.log("All projects>> ", this.allProjects)
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}


