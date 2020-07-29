export type UserType = {
    id: number
    name: string
    msg: string
    date: string
    key?: number
}
export type UsersType = UserType[]

//SecondTaskReducer
export type PriorityType = 'All' | 'Low' | 'Middle' | 'High'

export type TaskPriorityType = {
    id: number
    task: string
    priority: PriorityType
}
export type TasksPriorityType = TaskPriorityType[]

export type priorityFilterType = {
    priority: PriorityType
    isActive?: boolean
}

export type priorityFiltersType = priorityFilterType[]

export type deleteTaskType = (taskId: number) => {}