import inquirer from 'inquirer';
import { ICommand } from './commands/ICommand';
import { MultiplicationOperationCommand } from './commands/multiplication-command';
import { DivisionOperationCommand } from './commands/division-command';
import { SumOperationCommand } from './commands/sum-command';
import { SubtractionOperationCommand } from './commands/subtraction-command';

const operations = [
  'Sum',
  'Subtraction',
  'Multiplication',
  'Division',
  'Rest',
  'Exponentiation',
];

const commands: ICommand[] = [
  new SumOperationCommand(),
  new SubtractionOperationCommand(),
  new MultiplicationOperationCommand(),
  new DivisionOperationCommand(),
];

inquirer
  .prompt({
    name: 'operation',
    message: 'Please select an operation: ',
    type: 'list',
    choices: operations,
  })
  .then((answer) => {
    commands
      .filter((command) => command.operation === answer.operation)
      .forEach((command) => command.execute());
  })
  .catch((error) => {
    console.log('Invalid option');
    console.log(error);
  });
