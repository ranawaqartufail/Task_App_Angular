import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/types/project';
import { AppComponent } from '../app.component';
import { APIService } from '../API.service';
import { DataStore } from "@aws-amplify/datastore";
import { Task } from 'src/models';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  private routeSub: any;
  slug: any = ""
  id: any = ""
  //tasks: any = [];
  allTasks: Task[] = [];

  project: Project = {
    id: "",
    name: "",
    description: ""
  }

  isVisible = false;
  createForm!: FormGroup;
  datas: any = [];

  //datas: Array<Task> = [];

  constructor(private api: APIService, private fb: FormBuilder, private route: ActivatedRoute, private projects: AppComponent) { }


  ngOnInit() {

    const subscription = DataStore.observe(Task).subscribe(msg => {
      console.log(msg.model, msg.opType, msg.element);

      this.getAllTask();
    });

    this.route.params.subscribe(params => {
      var id = params['id'];
      console.log(id);
    });

    this.createForm = this.fb.group({
      'name': ['', Validators.required],
      'projectID': ['', Validators.required]
    });

    this.getAllTask();
    // this.api.ListProjects().then(event => {
    //   this.tasks = event.items;
    // });

    this.routeSub = this.route.params.subscribe(params => {
      console.log(params)
      this.slug = params['slug']
      console.log(this.slug)
      this.getAllTask();
    });

    if (this.id != 0) {
      this.project = this.projects.onGetTodo(this.id);
    }

  }

  public onCreate(task: Task) {
    this.api.CreateTask(task).then(event => {
      console.log('item created!');
      this.createForm.reset();
      console.log(task)
    })
      .catch(e => {
        console.log('error creating tasks...', e);
      });
  }

  // async onCreate(task: Task) {
  //   await DataStore.save(new Task(task));

  // }

  async getAllTask() {
    this.allTasks = (await DataStore.query(Task))
      .filter(a => a.projectID === this.slug);
    console.log("All Tasks>> ", this.allTasks)
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  onFileChange(event: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      /* selected the first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      /* save data */
      
      this.datas = XLSX.utils.sheet_to_json(ws);
      console.log(this.datas);
       // DataStore.save(new Task(this.datas))
       this.api.CreateTask(this.datas).then(event => {
        console.log('item created!');
        this.createForm.reset();
        console.log(this.datas)
      })

    };

    reader.readAsBinaryString(target.files[0]);

  }

}
