import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as commonAction from 'js/actions/common';
import CartItem from 'js/components/testHigh';


/**
 * 测试高阶组件
 */
class HighApp extends Component {
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
        
        return (
            <div>
                <CartItem seconds={6}/>
                {this.props.children}
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        
    }
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Object.assign({}, commonAction), dispatch),
    dispatch: dispatch
});
export default connect(mapStateToProps, mapDispatchToProps)(HighApp);
HighApp.contextTypes = {
    router: React.PropTypes.object
}
