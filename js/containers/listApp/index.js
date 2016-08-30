import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as listAction from 'js/actions/list';
import * as commonAction from 'js/actions/common';
import {List} from 'js/components/list';
class ListApp extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.getList(1, 5);
        actions.setConfirmBox({
            show: true,
            text: "listApp显示",
            confirm: function () {
                alert("你点击了确定")
            },
            cancel: function () {
                alert("你点击了取消")
            }
        })

    }


    /**
     * 在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
     * @param np
     */
    componentWillReceiveProps(np) {

    }

    /**
     * 在接收到新的 props 或者 state，将要渲染之前调用。
     * 该方法在初始化渲染的时候不会调用，在使用 forceUpdate 方法的时候也不会。
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    /**
     * 在组件从 DOM 中移除的时候立刻被调用。
     */
    componentWillUnmount() {

    }

    render() {
        const {list} = this.props;
        return (
            <div>
                <input type="button" value="删除"/>
                <List list={list}></List>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        list: state.list.indexList,
    }
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Object.assign({}, listAction, commonAction), dispatch),
    dispatch: dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(ListApp);
ListApp.contextTypes = {
    router: React.PropTypes.object
}
