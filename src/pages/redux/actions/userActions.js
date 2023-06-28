import api from "../appi"
import { GET_ALLUSER_FAIL, GET_ALLUSER_REQUEST, GET_ALLUSER_SUCCESS, USER_DELETE_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../constants/userConstants"


export const userRegisterAction = userData => async dispatch => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })
        const { data } = await api.post("/users", userData)
        dispatch({ type: USER_REGISTER_SUCCESS })
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error })

    }
}

export const getAllUserAction = () => async dispatch => {
    try {
        dispatch({ type: GET_ALLUSER_REQUEST })
        const { data } = await api.get("/users")
        dispatch({ type: GET_ALLUSER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_ALLUSER_FAIL, payload: error })

    }
}
export const deleteUserAction = (userId) => async dispatch => {
    try {
        dispatch({ type: USER_DELETE_REQUEST })
        const { data } = await api.delete(`/users/${userId}`)
        dispatch({ type: USER_DELETE_SUCCESS })
    } catch (error) {
        dispatch({ type: USER_DELETE_FAIL, payload: error.message })

    }
}
export const updateUserAction = (userData) => async dispatch => {
    try {
        dispatch({ type: USER_UPDATE_REQUEST })
        const { data } = await api.patch(`/users/${userData.id}`, userData)
        dispatch({ type: USER_UPDATE_SUCCESS })
    } catch (error) {
        dispatch({ type: USER_UPDATE_FAIL, payload: error.message })

    }
}