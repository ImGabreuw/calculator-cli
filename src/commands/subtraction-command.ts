import inquirer from 'inquirer';
import { ICommand } from './ICommand';

export class SubtractionOperationCommand implements ICommand {
  operation: string;

  constructor() {
    this.operation = 'Subtraction';
  }

  subtraction(a: string, b: string): void {
    const subtraction = Number(a) - Number(b);
    console.log(`The subtraction between ${a} and ${b} is: ${subtraction}`);
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
      .then(({ numberA, numberB }) => this.subtraction(numberA, numberB))
      .catch((error) => console.log(error));
  }
}
