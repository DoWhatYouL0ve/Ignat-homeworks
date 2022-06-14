import {UserType} from "../HW8";

export type ActionType = { type: 'sort', payload: 'up' | 'down'} | {type: 'check', payload: number}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let stateCopy = [...state]
            if(action.payload === 'up') {
                return stateCopy.sort((a,b)=> a.name > b.name ? 1 : -1)
            }else if(action.payload === 'down') {
                return stateCopy.sort((a,b)=> a.name < b.name ? 1 : -1)
            }
            stateCopy.sort()
            return stateCopy
        }
        case 'check': {
            return state.filter(el=>el.age >= 18)
        }
        default: return state
    }
}