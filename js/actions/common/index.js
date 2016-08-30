//改变公共组件状态 action
import * as types from 'js/constants/ActionTypes';
export function setLoadState(data) {
    return {
        type: types.SET_LOADSTATE,
        data
    };
}
export function setModalState(data) {
    return {
        type: types.SET_MODALSTATE,
        data
    };
}
export function setConfirmBox(data) {
    return {
        type: types.SET_CONFIRMBOX,
        data
    };
}