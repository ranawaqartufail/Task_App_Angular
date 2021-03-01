import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Task {
  readonly id: string;
  readonly name?: string;
  readonly projectID: string;
  readonly Project?: Project;
  constructor(init: ModelInit<Task>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

export declare class Project {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly Tasks?: (Task | null)[];
  constructor(init: ModelInit<Project>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}