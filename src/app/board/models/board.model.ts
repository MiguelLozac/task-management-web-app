import { List } from "./list.type";
import { v4 as uuidv4 } from 'uuid';

export class Board {
    id: string | null;
    title: string | null;
    lists?: List[] = [];

    constructor(title: string) {
        this.id = uuidv4();
        this.title = title;
    }
}