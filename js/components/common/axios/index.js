import * as commonAction from 'js/actions/common';
import axios from 'axios'
/**
 * 封装axios
 * @param dispatch 父组件action传递的dispatch
 * @param mySetting 配置参数
 * @returns {Promise.<T>}
 */
export default function (dispatch, mySetting) {

    var setting = {
        method: 'get', //请求类型
        type: 'json',//返回值类型
        timeout: 5000,//超时时间
        url: '', //请求地址
        needLoad: true,//是否需要加载动画，默认为true
        data: null, //发送给服务器的数据
        success: null, //请求成功后执行的方法
        error: null //请求失败后执行的方法
    };
    /**
     * 覆盖默认设置
     */
    for (let key in mySetting) {
        setting[key] = mySetting[key];
    }
    //设置加载状态
    setting.needLoad && dispatch(commonAction.setLoadState(true));
    return (function (dispatch, setting) {
        return axios({
            method: setting.method,
            responseType: setting.type,
            timeout: setting.timeout,
            data: setting.data,
            url: setting.url
        });
    })(dispatch, setting).then((data) => {
        if (data.status === 200) {
            //成功
            dispatch(commonAction.setLoadState(false));
            setting.success && setting.success(data);
            return data;
        } else {
            //请求失败
            dispatch(commonAction.setLoadState(false));
            setting.error && setting.error(e);
            return data;
        }
    }).catch(function (error) {
        //有异常，或者网络不通
        dispatch(commonAction.setLoadState(false));
        setting.error && setting.error(error);
        return error;
    });
}
