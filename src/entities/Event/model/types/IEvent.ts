import {User} from "@/entities/User";
import {IAppFile} from "@/entities/AppFile";
import {Tag} from "@/entities/Tag";

export interface IEvent {
    id: number;
    name: string;
    desc: string;
    date: string;
    time: string;
    duration: string;
    locationName: string;
    locationLat: string;
    locationLng: string;
    creator: User;
    created_at: Date;
    previewFile: IAppFile;
    invitedCurators: User[];
    tags: Tag[];
}
