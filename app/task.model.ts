
export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {}
  markAsDone(): void {
    this.done = !this.done;
  }
}
