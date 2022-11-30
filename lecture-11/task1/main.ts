abstract class Employee {
  constructor(private name: string, private work: string) {}
  sayName(): void {
    console.log('Im', this.name);
  }
  doWork(): void {
    console.log('Im working on', this.work);
  }
  abstract sayRole(): void;
}
class Developer extends Employee {
  role: string;
  constructor(name: string, work: string, role: string) {
    super(name, work);
    this.role = role;
  }
  sayRole(): void {
    console.log('My role is', this.role);
  }
}
class PM extends Employee {
  constructor(name: string, work: string) {
    super(name, work);
  }
  sayRole(): void {
    console.log('My role is Project Manager');
  }
}
const pm = new PM('Vlad', 'managing new project');
const front = new Developer('Maria', 'user interface', 'front-end');
const back = new Developer('Petro', 'database', 'back-end');
const devops = new Developer('Vasya', 'scaling project with Docker', 'devops');
const qa = new Developer('Katia', 'testing the code', 'qa');
// pm.doWork();
// front.doWork();
// back.doWork();
devops.sayName();
devops.doWork();
devops.sayRole();
