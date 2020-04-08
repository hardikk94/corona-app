import { DashboardState } from '../states/dashboard.state';
import { dashboardActionTypes, DashboardAction } from './../actions/dashboard.action'


export const listInitalState: DashboardState = {
    list: [],
}

export function dashboardReducer(state = listInitalState, action: DashboardAction): DashboardState {
    switch (action.type) {
        case dashboardActionTypes.LIST_COMPLETED: {
            return Object.assign({}, state, action.payload);
        }
        case dashboardActionTypes.LIST_ADD_REQUESTED: {
            let id = Math.floor(Math.random() * 100)
            let note = {
                id,
                ...action.payload
            };                
            let list = [note, ...state.list]
            let data = {
                list
            }
            return Object.assign({}, state, data);
        }
        case dashboardActionTypes.LIST_DELETE_REQUESTED: {
            if (state.list && state.list.length > 0) {
                let index = state.list.findIndex(item => item.id === action.payload.id)
                if (index !== -1) {
                    let list = [...state.list]
                    list.splice(index, 1)
                    let data = {
                        list
                    }
                    return Object.assign({}, state, data);
                }
            }
        }
        case dashboardActionTypes.LIST_UPDATED_REQUESTED: {
            return Object.assign({}, state, action.payload);
        }
        default: {
            return state;
        }

    }
}

