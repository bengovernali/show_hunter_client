import { getCookie, deleteCookie } from '../../helpers/cookie'

const initialState = { tokenPresent: !!getCookie('ath') }

function tokenReducer(state = initialState, action) {
    if (action.type === 'addToken') {
        return {
            ...state,
            tokenPresent: true,
        }
    }
    if (action.type === 'deleteToken') {
        deleteCookie('ath')
        return {
            ...state,
            tokenPresent: false
        }
    }
    return state
}

export default tokenReducer