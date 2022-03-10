import inquirer from 'inquirer';
import { ICommand } from './ICommand';

export class MultiplicationOperationCommand implements ICommand {
  operation: string;

  constructor() {
    this.operation = 'Multiplication';
  }

  multiplication(a: string, b: string): void {
    const multiplication = Number(a) * Number(b);
    console.log(`The multiplication between ${a} and ${b} is: ${multiplication}`);
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
      .then(({ numberA, numberB }) => this.multiplication(numberA, numberB))
      .catch((error) => console.log(error));
  }
}
