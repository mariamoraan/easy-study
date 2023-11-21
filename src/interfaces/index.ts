export interface ISubject {
    id: string,
    name: string,
    color: string,
}

export interface ITask {
    date: Date | null,
}

export interface IEvent {
    date: Date | null,
    name: string,
    subjectId?: string,
}