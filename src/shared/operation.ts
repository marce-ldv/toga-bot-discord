import { Command } from './command';

export interface Operation {
  operationId?: string,
  execute: (command: any) => any;
}