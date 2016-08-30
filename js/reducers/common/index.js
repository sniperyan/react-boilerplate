import * as types from 'js/constants/ActionTypes';
import initialState from './initialState';
/**
 * 公用的UI状态 reducer
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case types.SET_LOADSTATE:
            return Object.assign({}, state, {
                loadState: action.data,
                modalState: state.modalState,
                confirmBoxState:state.confirmBoxState
            });
        case types.SET_MODALSTATE:
            return Object.assign({}, state, {
                loadState: state.loadState,
                modalState: action.data,
                confirmBoxState:state.confirmBoxState
            });
        case types.SET_CONFIRMBOX:
            return Object.assign({}, state, {
                loadState: state.loadState,
                modalState: state.modalState,
                confirmBoxState:{
                    ...state.confirmBoxState,
                    ...action.data
                }
            });
        default:
            return state;
    }
}