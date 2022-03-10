import inquirer from 'inquirer';
import { ICommand } from './ICommand';

export class ExponentiationOperationCommand implements ICommand {
  operation: string;

  constructor() {
    this.operation = 'Exponentiation';
  }

  exponentiation(a: string, b: string): void {
    const exponentiation = Math.pow(Number(a), Number(b));
    console.log(`${a} to the power of ${b} is: ${exponentiation}`);
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
      .then(({ numberA, numberB }) => this.exponentiation(numberA, numberB))
      .catch((error) => console.log(error));
  }
}
