import exp from 'constants';

export const ADD_MENU_ITEM = 'headerReducer/ADD-MENU-ITEM';

export type itemType = {
    name: string
    link: string
}

export type menuItemsType = itemType[]

export type initialStateType = {
    menuItems: menuItemsType
}

const initialState = {
    menuItems: [{name: 'PreJunior', link: '/prejunior'}, {name: 'Junior', link: '/junior'}, {name: 'Junior+', link: '/junior+'}]
}

type actionsType = addMenuItemACType;

const headerReducer = (state: initialStateType = initialState, action:actionsType): initialStateType => {
    switch (action.type) {
        default: return state;
    }
}

export type addMenuItemACType = {
    type: typeof ADD_MENU_ITEM
    name: string;
    link: string;
}

export const addMenuItemAC = (name: string, link: string):addMenuItemACType => ({type: ADD_MENU_ITEM, name, link});


export default headerReducer;