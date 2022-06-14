export type InitialStateType = {
    isLoading: boolean
}
const initState = {
    isLoading: false
}
type loadingACType = {
    type: string
    isLoading: boolean
}
const IS_LOADING = 'IS_LOADING'
export const loadingReducer = (state: InitialStateType = initState, action: loadingACType): InitialStateType => { // fix any
    switch (action.type) {
        case IS_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): loadingACType => {
    return {type: IS_LOADING, isLoading } as const}// fix any