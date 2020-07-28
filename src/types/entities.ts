export type UserType = {
    id: number
    name: string
    msg: string
    date: string
    key?: number
}
export type UsersType = UserType[]

export type PriorityType = 'low' | 'middle' | 'height'

export type TaskPriorityType = {
    id: number
    task: string
    priority: PriorityType
}

export type TasksPriorityType = TaskPriorityType[]
