import { IconType } from "react-icons";

export type Links = {
  name: string;
  href: string;
  icon?: IconType;
};

export type Posts = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type Params = {
  params: {
    postId: string;
  };
};

export interface Users {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export type UsersList = {
  items: Users[];
};

export interface Task {
  id: number;
  title: string;
  description: string | null;
  createdAt: Date;
}

export type TaskList = {
  items: Task;
};
