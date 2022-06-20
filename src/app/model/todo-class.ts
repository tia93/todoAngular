import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { getPriority } from "os";

export class TodoClass { 
    
    // public e di defaoult sia con le variabile che con funzioni, private  li puo usare solo quella proprieta tipo todo,readonly posso cambiarla solo una volta  si usa per le date  si puo solo leggere?
 

    public name: string;
    private tags: string[];
    readonly _creationDate: Date; // = new Data(); se non abbiamo nulla verra la creata la data nel momento messo 
    priority: TodoPriority   //? potrebbe esserci ! sono sicuro che ci sia


    constructor(name: string, tags: string[] = [], creationDate: Date = new Date(), priority: TodoPriority = TodoPriority.LOW){ // si riporta la roba vecchia da javascrip todo app
        this.name = name;
        this.tags = tags;
        this._creationDate = creationDate.getTime();
        this.priority = priority;
    }
    get creationDate(): Date {
        return new Date(this._creationDate);
    }

    get color(): string {
            return getPriorityColor(this.priority);
        }
        
    }


// export enum TodoPriority{
//     DONE = {order: -1 , name: 'completato', color: 'gray' },
//     LOW = {order: 0, name: 'bassa', color: 'green' },
//     MEDIUM =  {order: 1, name: 'media', color: 'yellow' },
//     HIGH = {order: 2, name: 'alta', color: 'orange' },
//     VERYHIGH = {order: 3, name: 'molto alta', color: 'red' }
// }

export enum TodoPriority{
    DONE = -1,
    LOW = 0,
    MEDIUM =  1,
    HIGH = 2,
    VERYHIGH = 3
}

export function getPriorityColor(priority: TodoPriority): string{
    switch (priority) {
        case TodoPriority.DONE:
            return 'gray';
            case TodoPriority.LOW:
            return 'green';
            case TodoPriority.MEDIUM:
            return 'yellow';
            case TodoPriority.HIGH:
            return 'orange';
            case TodoPriority.VERYHIGH:
            return 'red';
            
            
    
        default:
            return 'red'
    }
}

export function getPriorityString(priority: TodoPriority): string{
    switch (priority) {
        case TodoPriority.DONE:
            return 'completato';
            case TodoPriority.LOW:
            return 'bassa';
            case TodoPriority.MEDIUM:
            return 'media';
            case TodoPriority.HIGH:
            return 'alta';
            case TodoPriority.VERYHIGH:
            return 'molto alta';
            
            
    
        default:
           return 'molto alta'
    }
}
