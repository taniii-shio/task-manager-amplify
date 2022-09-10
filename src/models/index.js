// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Board, Column, Task } = initSchema(schema);

export {
  User,
  Board,
  Column,
  Task
};