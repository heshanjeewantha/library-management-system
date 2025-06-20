export interface Book {
  id?: number;
  title: string;
  author: string;
  description: string;
}

export interface LoginDto {
  username: string;
  password: string;
}