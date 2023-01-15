export interface statusInterface {
    verified: boolean;
    feedback: string;
    setCount: number
}

export interface userInterface {
    name: {first: string; last: string}; 
    _id: string; 
    photo: string;
}

export interface CatFactInterface {
    status: statusInterface;
    _id: string;
    user: userInterface;
    text: string;
    __v: number;
    source: string;
    updatedAt: string;
    type: string;
    createdAt: string;
    deleted: boolean;
    used: boolean;
}

export interface ErrorData {
    data: any;
    status: number;
    statusText: string;
    message?: string;
}
