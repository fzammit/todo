export class Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;

  constructor(array) {
    this.id = array.id;
    this.title = array.title;
    this.userId = array.userId;
    this.completed = array.completed;
  }
}
