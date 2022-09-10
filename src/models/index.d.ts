import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BoardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ColumnMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TaskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Board {
  readonly id: string;
  readonly username: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Board, BoardMetaData>);
  static copyOf(source: Board, mutator: (draft: MutableModel<Board, BoardMetaData>) => MutableModel<Board, BoardMetaData> | void): Board;
}

export declare class Column {
  readonly id: string;
  readonly title: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Column, ColumnMetaData>);
  static copyOf(source: Column, mutator: (draft: MutableModel<Column, ColumnMetaData>) => MutableModel<Column, ColumnMetaData> | void): Column;
}

export declare class Task {
  readonly id: string;
  readonly title: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Task, TaskMetaData>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task, TaskMetaData>) => MutableModel<Task, TaskMetaData> | void): Task;
}