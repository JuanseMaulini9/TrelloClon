export interface UserInterface {
  id: string;
  username: string;
}

export interface BoardInterface {
  id: number;
  boardname: string;
  userid: number;
  createdat: Date;
}

// AuthStore
export interface AuthStateInterface {
  user: UserInterface | null;
  isAuthenticate: boolean;
}

export interface AuthActionsInterface {
  setUser: (user: UserInterface | null) => void;
  cleanUser: (user: UserInterface) => void;
}

// BoardsStore
export interface BoardStateInterface {
  boards: BoardInterface[];
  createBoardModal: boolean;
  currentBoard: BoardInterface | null;
  addCardModal: boolean;
}

export interface BoardsActionInterface {
  setBoards: (boards: BoardInterface[]) => void;
  setNewBoard: (newBoard: BoardInterface) => void;

  openCreateModal: () => void;
  closeCreateModal: () => void;

  openCardModal: () => void;
  closeCardModal: () => void;

  setCurrentBoard: (newCurrentBoard: BoardInterface) => void;
}

export interface FormFields {
  username: string;
  password: string;
}

export interface TaskInterface {
  id: string;
  title: string;
  columnId: string;
}

export interface ColumnInterface {
  name: string;
  id: string;
}

export interface ColumnProps {
  id: string;
  name: string;
  tasks: TaskInterface[];
}

export interface Task {
  id: number;
  boardid: number;
  state: string;
  position: number | null;
  title: string;
  description: string;
  type: string | null;
  priority: string | null;
  limittime: string | null;
  createdat: string;
}
