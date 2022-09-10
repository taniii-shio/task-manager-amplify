// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Column, Task } = initSchema(schema);

export {
  Column,
  Task
};