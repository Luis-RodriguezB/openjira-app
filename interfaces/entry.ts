export interface Entry {
    _id: string;
    description: string;
    createdAt: number;
    updatedAt: number;
    status: EntryStatus
}

export enum EntryStatus {
    PENDING = 'pending',
    INPROGRESS = 'in-progress',
    FINISHED = 'finished',
}