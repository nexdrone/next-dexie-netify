import Dexie, { Table } from 'dexie';

export interface Pilot {
  id?: number;
  pilotName?: string;
  registDate?: Date;
  updateDate?: Date;
}

export class DB extends Dexie {
  pilots!: Table<Pilot>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      pilots: '++id, pilotName, registDate, updateDate'
    });
  }
}

export const db = new DB();
