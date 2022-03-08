export interface ICommand {
  operation: string;

  execute(): void;
}
