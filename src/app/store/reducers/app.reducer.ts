import { authReducer } from './auth.reducer'
import { ToastReducer } from './toast.reducer'
import { LoadingReducer } from './loading.reducer'
import { dashboardReducer } from './dashboard.reducer'

export const reducers = {
    authInfo: authReducer,
    toastInfo: ToastReducer,
    loadingInfo: LoadingReducer,
    dashboardInfo:dashboardReducer
}