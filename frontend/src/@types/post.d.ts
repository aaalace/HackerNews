export interface IPost {
    id: number
    name: string
    rating: number
    author: string
    date: string
    link: string
}

export const initPost: IPost = {
    id: 0,
    name: "",
    rating: 0,
    author: "",
    date: "",
    link: ""
}