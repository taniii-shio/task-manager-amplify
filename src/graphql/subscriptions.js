/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBoard = /* GraphQL */ `
  subscription OnCreateBoard($filter: ModelSubscriptionBoardFilterInput) {
    onCreateBoard(filter: $filter) {
      id
      title
      tasks {
        id
        title
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBoard = /* GraphQL */ `
  subscription OnUpdateBoard($filter: ModelSubscriptionBoardFilterInput) {
    onUpdateBoard(filter: $filter) {
      id
      title
      tasks {
        id
        title
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBoard = /* GraphQL */ `
  subscription OnDeleteBoard($filter: ModelSubscriptionBoardFilterInput) {
    onDeleteBoard(filter: $filter) {
      id
      title
      tasks {
        id
        title
      }
      createdAt
      updatedAt
    }
  }
`;
