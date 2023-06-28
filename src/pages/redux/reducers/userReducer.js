import { GET_ALLUSER_FAIL, GET_ALLUSER_REQUEST, GET_ALLUSER_SUCCESS, USER_DELETE_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../constants/userConstants"


const userReducer = (state = { users: [] }, { type, payload }) => {

    switch (type) {
        case USER_REGISTER_REQUEST: return {
            ...state,
            loading: true
        }
        case USER_REGISTER_SUCCESS: return {
            ...state,
            loading: false,
            registre: !state.registred
        }
        case USER_REGISTER_FAIL: return {
            ...state,
            loading: false,
            registrationError: payload
        }

        case GET_ALLUSER_REQUEST: return {
            ...state,
            loading: true
        }
        case GET_ALLUSER_SUCCESS: return {
            ...state,
            loading: false,
            users: payload
        }
        case GET_ALLUSER_FAIL: return {
            ...state,
            loading: false,
            gateUsersError: payload
        }

        case USER_DELETE_REQUEST: return {
            ...state,
            loading: true
        }
        case USER_DELETE_SUCCESS: return {
            ...state,
            loading: false,
            userDeleted: !state.userDeleted
        }
        case USER_DELETE_FAIL: return {
            ...state,
            loading: false,
            gateDeleteError: payload
        }
        case USER_UPDATE_REQUEST: return {
            ...state,
            loading: true
        }
        case USER_UPDATE_SUCCESS: return {
            ...state,
            loading: false,
            userUpdated: !state.userUpdated
        }
        case USER_UPDATE_FAIL: return {
            ...state,
            loading: false,
            updateError: payload
        }

        default: return state
    }

}
export default userReducer