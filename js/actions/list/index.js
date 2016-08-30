//列表页action
import * as types from 'js/constants/ActionTypes';
import * as constants from 'js/constants/Constants';
import axios from 'js/components/common/axios'

export function getList(page, limit, tab) {
    return function (dispatch, getState) {
        return axios(dispatch,{
            method: 'GET', //请求类型
            url: constants.ACTION_PREFIX + '/api/v1/topics?tab=all&page=' + page + '&limit=' + limit, //请求地址
            success: function (ret) {
                dispatch(setList(ret.data.data));
            }, //请求成功后执行的方法
            error:function (e) {
                alert('error'+e);
            }
        });
    };
}
export function setList(data) {
    return {
        type: types.SET_INDEXLIST,
        data
    };
}