export interface StatusInterface {
  verified: boolean;
  feedback: string;
  setCount: number;
}

export interface UserInterface {
  name: { first: string; last: string };
  _id: string;
  photo: string;
}

export interface CatFactInterface {
  status: StatusInterface;
  _id: string;
  user: UserInterface;
  text: string;
  __v: number;
  source: string;
  updatedAt: string;
  type: string;
  createdAt: string;
  deleted: boolean;
  used: boolean;
}

export interface ErrorData {
  data: any;
  status: number;
  statusText: string;
  message?: string;
}

export interface CatDetailParams {
  params: { id: string };
}
