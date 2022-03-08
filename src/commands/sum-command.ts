import inquirer from 'inquirer';
import { ICommand } from './ICommand';

export class SumOperationCommand implements ICommand {
  operation: string;

  constructor() {
    this.operation = 'Sum';
  }

  sum(a: string, b: string): void {
    const sum = Number(a) + Number(b);
    console.log(`A soma entre ${a} e ${b} é: ${sum}`);
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
      .then(({ numberA, numberB }) => this.sum(numberA, numberB))
      .catch((error) => console.log(error));
  }
}
