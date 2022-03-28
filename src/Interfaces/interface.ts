export interface ApiData{
    data: Data,
    success: boolean,
}

export interface Data{
    id: number,
    name: string,
    img: string,
}

export interface Obj{
    item: Data,
}