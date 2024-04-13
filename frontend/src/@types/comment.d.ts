export interface IComment {
    id: number,
    author: string,
    content: string,
    post_id: number,
    parent_id: number
}

export const initComment: IComment = {
    id: 0,
    author: "",
    content: "",
    post_id: 0,
    parent_id: 0
}