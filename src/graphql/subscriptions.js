/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateColumn = /* GraphQL */ `
  subscription OnCreateColumn($owner: String) {
    onCreateColumn(owner: $owner) {
      id
      title
      tasks {
        id
        title
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateColumn = /* GraphQL */ `
  subscription OnUpdateColumn($owner: String) {
    onUpdateColumn(owner: $owner) {
      id
      title
      tasks {
        id
        title
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteColumn = /* GraphQL */ `
  subscription OnDeleteColumn($owner: String) {
    onDeleteColumn(owner: $owner) {
      id
      title
      tasks {
        id
        title
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
