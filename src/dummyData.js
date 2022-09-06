import { v4 as uuidv4 } from "uuid";

const dummyData = [
  {
    id: uuidv4(),
    title: "Todos",
    tasks: [
      {
        id: uuidv4(),
        title: "Reactの勉強",
      },
      {
        id: uuidv4(),
        title: "Youtubeで勉強",
      },
      {
        id: uuidv4(),
        title: "散歩",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "In progress",
    tasks: [
      {
        id: uuidv4(),
        title: "コーディング",
      },
      {
        id: uuidv4(),
        title: "転職活動",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Done",
    tasks: [
      {
        id: uuidv4(),
        title: "読書",
      },
    ],
  },
];

export default dummyData;
