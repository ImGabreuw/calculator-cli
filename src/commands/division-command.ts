import inquirer from 'inquirer';
import { ICommand } from './ICommand';

export class DivisionOperationCommand implements ICommand {
  operation: string;

  constructor() {
    this.operation = 'Division';
  }

  division(a: string, b: string): void {
    const division = Number(a) / Number(b);
    console.log(`The division between ${a} and ${b} is: ${division}`);
  }

  execute(): void {
    inquirer
      .prompt([
        {
          name: 'numberA',
          message: 'Enter a number',
          type: 'number',
        },
        {
          name: 'numberB',
          message: 'Enter a number',
          type: 'number',
        },
      ])
      .then(({ numberA, numberB }) => this.division(numberA, numberB))
      .catch((error) => console.log(error));
  }
}
