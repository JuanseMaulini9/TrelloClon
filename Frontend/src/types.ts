export interface UserInterface {
  id: string;
  usernam: string;
}

export interface AuthStateInterface {
  user: UserInterface | null;
  isAuthenticate: boolean;
}

export interface ActionsInterface {
  setUser: (user: UserInterface | null) => void;
  cleanUser: (user: UserInterface) => void;
}

export interface FormFields {
  username: string;
  password: string;
}
