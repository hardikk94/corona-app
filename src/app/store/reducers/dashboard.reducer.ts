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
            return Object.assign({}, state, action.payload);
        }
        case dashboardActionTypes.LIST_DELETE_REQUESTED: {
            return Object.assign({}, state, action.payload);
        }
        case dashboardActionTypes.LIST_UPDATED_REQUESTED: {
            return Object.assign({}, state, action.payload);
        }
        default: {
            return state;
        }

    }
}
