class Task {
  forWho: string;
  task: string;
  status: string;
  constructor(forWho: string, task: string, status: string) {
    this.forWho = forWho;
    this.task = task;
    this.status = status;
  }
  public set updateStatus(newStatus: string) {
    this.status = newStatus;
  }
}
abstract class newEmployee {
  constructor(private name: string, private work: string) {}
  sayName(): void {
    console.log('Im', this.name);
  }
  doWork(): void {
    console.log('Im working on', this.work);
  }
  abstract sayRole(): void;
}
class newDeveloper extends newEmployee {
  role: string;
  task: any;
  constructor(name: string, work: string, role: string) {
    super(name, work);
    this.role = role;
  }
  sayRole(): void {
    console.log('My role is', this.role);
  }
  public set newTask(task: any) {
    if (task.forWho === this.role) {
      this.task = task;
      console.log(`(${this.role}) got new task to ${this.task.task}`);
    } else {
      this.task = {};
      console.log('task was sent to wrong person');
    }
  }
  public set changeTaskStatus(newStatus: string) {
    if (Object.keys(this.task).length !== 0) {
      this.task.updateStatus = newStatus;
      console.log(`(${this.role}) changed task status to ${this.task.status}`);
    } else {
      console.log('no tasks');
    }
  }

  public get tasks(): object {
    console.log(`(${this.role}) current task status is ${this.task.status}`);
    return this.task;
  }
}
class newPM extends newEmployee {
  taskParams: any;
  newTask: any;
  role: string;
  constructor(name: string, work: string, role: string) {
    super(name, work);
    this.role = role;
  }
  sayRole(): void {
    console.log('My role is Project Manager');
  }
  set generateTask(taskParams: any) {
    this.newTask = new Task(
      taskParams.forWho,
      taskParams.task,
      taskParams.status
    );
    console.log(
      `(${this.role}) generated new task for ${this.newTask.forWho} to ${this.newTask.task} with status ${this.newTask.status}`
    );
  }
  get getTask(): string {
    return this.newTask;
  }
}
const newProjectManager = new newPM(
  'Homer',
  'managing amount of coffee',
  'Project Maneger'
);
const newFrontEnd = new newDeveloper(
  'Petro',
  'Scale project to 100 VMs',
  'DevOps'
);
newProjectManager.generateTask = {
  forWho: 'DevOps',
  task: 'OPEN DOCKER',
  status: 'TODO'
};
newFrontEnd.newTask = newProjectManager.getTask;
newFrontEnd.tasks;
newFrontEnd.changeTaskStatus = 'DONE';
newFrontEnd.tasks;
