import * as authApi from '../../Api/authApi'

export const logIn = (userData) => async (dispatch) => {
    try {
        dispatch({ type: "AUTH_START" })
        const { data } = await authApi.logIn(userData);
        console.log(data)
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}

export const signUp = (userData) => async (dispatch) => {
    try {
        dispatch({ type: "AUTH_START" })
        const { data } = await authApi.signUp(userData);
        console.log("data", data)
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL", })
    }
}

export const logout = () => async (dispatch) => {
    dispatch({type : "LOG_OUT"})
}