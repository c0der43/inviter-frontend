import {User} from "@/entities/User";
import {IEvent} from "@/entities/Event";

export interface Comment {
    id: number;
    text: string;
    user: User;
    event: IEvent;
    create_at: string;
}

export enum EventComment {
    DELETE = 'Удаление'
}
