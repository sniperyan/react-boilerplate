import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as commonAction from 'js/actions/common';
import {Loading} from 'js/components/common/load';
import {Modal} from 'js/components/common/modal';
import {ConfirmBox} from 'js/components/common/confirmBox';

/**
 * 根组件，加载一些通过的ui组件
 */
class RootApp extends Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
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
        const {loadState,modalState,confirmBoxState} = this.props;
        return (
            <div>
                {this.props.children}
                <Loading show={loadState}/>  
                <Modal show={modalState}/>
                <ConfirmBox {...confirmBoxState}/>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        loadState: state.common.loadState,
        modalState: state.common.modalState,
        confirmBoxState:state.common.confirmBoxState
    }
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Object.assign({}, commonAction), dispatch),
    dispatch: dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(RootApp);
RootApp.contextTypes = {
    router: React.PropTypes.object
}
