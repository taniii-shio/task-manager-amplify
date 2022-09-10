import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Task {
  readonly id?: string | null;
  readonly title: string;
  constructor(init: ModelInit<Task>);
}

type ColumnMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Column {
  readonly id: string;
  readonly title: string;
  readonly tasks?: (Task | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Column, ColumnMetaData>);
  static copyOf(source: Column, mutator: (draft: MutableModel<Column, ColumnMetaData>) => MutableModel<Column, ColumnMetaData> | void): Column;
}