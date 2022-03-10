import inquirer from 'inquirer';
import { ICommand } from './ICommand';

export class RestOperationCommand implements ICommand {
  operation: string;

  constructor() {
    this.operation = 'Rest';
  }

  rest(a: string, b: string): void {
    const rest = Number(a) % Number(b);
    console.log(`O resto da divisão entre ${a} e ${b} é: ${rest}`);
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
      .then(({ numberA, numberB }) => this.rest(numberA, numberB))
      .catch((error) => console.log(error));
  }
}
