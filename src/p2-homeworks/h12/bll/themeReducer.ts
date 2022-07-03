const initState = {
    theme: 'red'
};

export type initStateType = {
    theme: string
}

export const themeReducer = (state: initStateType = initState, action: changeThemeCType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

type changeThemeCType = {
    type: 'CHANGE_THEME'
    theme: string
}

export const changeThemeC = (theme: string): changeThemeCType => ({type: 'CHANGE_THEME', theme}); // fix any