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



export type buttonPropsType = {
    id: string | number
    name: string
    active: boolean
    disabled: boolean
    danger: boolean
    error?: string
}

export type inputTextPropsType = {
    name: string
    placeholder: string
    id: string | number
    value?: string | number
}