/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBoard = /* GraphQL */ `
  query GetBoard($id: ID!) {
    getBoard(id: $id) {
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
export const listBoards = /* GraphQL */ `
  query ListBoards(
    $filter: ModelBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        tasks {
          id
          title
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
