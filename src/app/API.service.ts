/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateTaskInput = {
  id?: string | null;
  name?: string | null;
  projectID: string;
  _version?: number | null;
  taskProjectId?: string | null;
};

export type ModelTaskConditionInput = {
  name?: ModelStringInput | null;
  projectID?: ModelIDInput | null;
  and?: Array<ModelTaskConditionInput | null> | null;
  or?: Array<ModelTaskConditionInput | null> | null;
  not?: ModelTaskConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Task = {
  __typename: "Task";
  id?: string;
  name?: string | null;
  projectID?: string;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
  Project?: Project;
};

export type Project = {
  __typename: "Project";
  id?: string;
  name?: string;
  description?: string;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
  Tasks?: ModelTaskConnection;
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection";
  items?: Array<Task | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UpdateTaskInput = {
  id: string;
  name?: string | null;
  projectID?: string | null;
  _version?: number | null;
  taskProjectId?: string | null;
};

export type DeleteTaskInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateProjectInput = {
  id?: string | null;
  name: string;
  description: string;
  _version?: number | null;
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelProjectConditionInput | null> | null;
  or?: Array<ModelProjectConditionInput | null> | null;
  not?: ModelProjectConditionInput | null;
};

export type UpdateProjectInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  _version?: number | null;
};

export type DeleteProjectInput = {
  id?: string | null;
  _version?: number | null;
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  projectID?: ModelIDInput | null;
  and?: Array<ModelTaskFilterInput | null> | null;
  or?: Array<ModelTaskFilterInput | null> | null;
  not?: ModelTaskFilterInput | null;
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelProjectFilterInput | null> | null;
  or?: Array<ModelProjectFilterInput | null> | null;
  not?: ModelProjectFilterInput | null;
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection";
  items?: Array<Project | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type CreateTaskMutation = {
  __typename: "Task";
  id: string;
  name?: string | null;
  projectID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Project?: {
    __typename: "Project";
    id: string;
    name: string;
    description: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateTaskMutation = {
  __typename: "Task";
  id: string;
  name?: string | null;
  projectID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Project?: {
    __typename: "Project";
    id: string;
    name: string;
    description: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteTaskMutation = {
  __typename: "Task";
  id: string;
  name?: string | null;
  projectID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Project?: {
    __typename: "Project";
    id: string;
    name: string;
    description: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateProjectMutation = {
  __typename: "Project";
  id: string;
  name: string;
  description: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Tasks?: {
    __typename: "ModelTaskConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type UpdateProjectMutation = {
  __typename: "Project";
  id: string;
  name: string;
  description: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Tasks?: {
    __typename: "ModelTaskConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type DeleteProjectMutation = {
  __typename: "Project";
  id: string;
  name: string;
  description: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Tasks?: {
    __typename: "ModelTaskConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetTaskQuery = {
  __typename: "Task";
  id: string;
  name?: string | null;
  projectID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Project?: {
    __typename: "Project";
    id: string;
    name: string;
    description: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListTasksQuery = {
  __typename: "ModelTaskConnection";
  items?: Array<{
    __typename: "Task";
    id: string;
    name?: string | null;
    projectID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTasksQuery = {
  __typename: "ModelTaskConnection";
  items?: Array<{
    __typename: "Task";
    id: string;
    name?: string | null;
    projectID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ListProjectsQuery = {
  __typename: "ModelProjectConnection";
  items?: Array<{
    __typename: "Project";
    id: string;
    name: string;
    description: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetProjectQuery = {
  __typename: "Project";
  id: string;
  name: string;
  description: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Tasks?: {
    __typename: "ModelTaskConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncProjectsQuery = {
  __typename: "ModelProjectConnection";
  items?: Array<{
    __typename: "Project";
    id: string;
    name: string;
    description: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateTaskSubscription = {
  __typename: "Task";
  id: string;
  name?: string | null;
  projectID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Project?: {
    __typename: "Project";
    id: string;
    name: string;
    description: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateTaskSubscription = {
  __typename: "Task";
  id: string;
  name?: string | null;
  projectID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Project?: {
    __typename: "Project";
    id: string;
    name: string;
    description: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteTaskSubscription = {
  __typename: "Task";
  id: string;
  name?: string | null;
  projectID: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Project?: {
    __typename: "Project";
    id: string;
    name: string;
    description: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateProjectSubscription = {
  __typename: "Project";
  id: string;
  name: string;
  description: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Tasks?: {
    __typename: "ModelTaskConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type OnUpdateProjectSubscription = {
  __typename: "Project";
  id: string;
  name: string;
  description: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Tasks?: {
    __typename: "ModelTaskConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type OnDeleteProjectSubscription = {
  __typename: "Project";
  id: string;
  name: string;
  description: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  Tasks?: {
    __typename: "ModelTaskConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTask(
    input: CreateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<CreateTaskMutation> {
    const statement = `mutation CreateTask($input: CreateTaskInput!, $condition: ModelTaskConditionInput) {
        createTask(input: $input, condition: $condition) {
          __typename
          id
          name
          projectID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Project {
            __typename
            id
            name
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTaskMutation>response.data.createTask;
  }
  async UpdateTask(
    input: UpdateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<UpdateTaskMutation> {
    const statement = `mutation UpdateTask($input: UpdateTaskInput!, $condition: ModelTaskConditionInput) {
        updateTask(input: $input, condition: $condition) {
          __typename
          id
          name
          projectID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Project {
            __typename
            id
            name
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTaskMutation>response.data.updateTask;
  }
  async DeleteTask(
    input: DeleteTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<DeleteTaskMutation> {
    const statement = `mutation DeleteTask($input: DeleteTaskInput!, $condition: ModelTaskConditionInput) {
        deleteTask(input: $input, condition: $condition) {
          __typename
          id
          name
          projectID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Project {
            __typename
            id
            name
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTaskMutation>response.data.deleteTask;
  }
  async CreateProject(
    input: CreateProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<CreateProjectMutation> {
    const statement = `mutation CreateProject($input: CreateProjectInput!, $condition: ModelProjectConditionInput) {
        createProject(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Tasks {
            __typename
            nextToken
            startedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProjectMutation>response.data.createProject;
  }
  async UpdateProject(
    input: UpdateProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<UpdateProjectMutation> {
    const statement = `mutation UpdateProject($input: UpdateProjectInput!, $condition: ModelProjectConditionInput) {
        updateProject(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Tasks {
            __typename
            nextToken
            startedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProjectMutation>response.data.updateProject;
  }
  async DeleteProject(
    input: DeleteProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<DeleteProjectMutation> {
    const statement = `mutation DeleteProject($input: DeleteProjectInput!, $condition: ModelProjectConditionInput) {
        deleteProject(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Tasks {
            __typename
            nextToken
            startedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProjectMutation>response.data.deleteProject;
  }
  async GetTask(id: string): Promise<GetTaskQuery> {
    const statement = `query GetTask($id: ID!) {
        getTask(id: $id) {
          __typename
          id
          name
          projectID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Project {
            __typename
            id
            name
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTaskQuery>response.data.getTask;
  }
  async ListTasks(
    filter?: ModelTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTasksQuery> {
    const statement = `query ListTasks($filter: ModelTaskFilterInput, $limit: Int, $nextToken: String) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            projectID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTasksQuery>response.data.listTasks;
  }
  async SyncTasks(
    filter?: ModelTaskFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTasksQuery> {
    const statement = `query SyncTasks($filter: ModelTaskFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTasks(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            projectID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTasksQuery>response.data.syncTasks;
  }
  async ListProjects(
    filter?: ModelProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjectsQuery> {
    const statement = `query ListProjects($filter: ModelProjectFilterInput, $limit: Int, $nextToken: String) {
        listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProjectsQuery>response.data.listProjects;
  }
  async GetProject(id: string): Promise<GetProjectQuery> {
    const statement = `query GetProject($id: ID!) {
        getProject(id: $id) {
          __typename
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Tasks {
            __typename
            nextToken
            startedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProjectQuery>response.data.getProject;
  }
  async SyncProjects(
    filter?: ModelProjectFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncProjectsQuery> {
    const statement = `query SyncProjects($filter: ModelProjectFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncProjects(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncProjectsQuery>response.data.syncProjects;
  }
  OnCreateTaskListener: Observable<
    SubscriptionResponse<OnCreateTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTask {
        onCreateTask {
          __typename
          id
          name
          projectID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Project {
            __typename
            id
            name
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTaskSubscription>>;

  OnUpdateTaskListener: Observable<
    SubscriptionResponse<OnUpdateTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTask {
        onUpdateTask {
          __typename
          id
          name
          projectID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Project {
            __typename
            id
            name
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTaskSubscription>>;

  OnDeleteTaskListener: Observable<
    SubscriptionResponse<OnDeleteTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTask {
        onDeleteTask {
          __typename
          id
          name
          projectID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Project {
            __typename
            id
            name
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTaskSubscription>>;

  OnCreateProjectListener: Observable<
    SubscriptionResponse<OnCreateProjectSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProject {
        onCreateProject {
          __typename
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Tasks {
            __typename
            nextToken
            startedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateProjectSubscription>>;

  OnUpdateProjectListener: Observable<
    SubscriptionResponse<OnUpdateProjectSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProject {
        onUpdateProject {
          __typename
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Tasks {
            __typename
            nextToken
            startedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateProjectSubscription>>;

  OnDeleteProjectListener: Observable<
    SubscriptionResponse<OnDeleteProjectSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProject {
        onDeleteProject {
          __typename
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Tasks {
            __typename
            nextToken
            startedAt
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteProjectSubscription>>;
}
