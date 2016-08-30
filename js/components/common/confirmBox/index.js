import React, {Component} from 'react';
import './index.less';
import {Modal} from 'js/components/common/modal';
/**
 * 带确定取消按钮提示框
 */
export class ConfirmBox extends Component {
    //添加私有状态是为了让组件在点击确认或者取消的后消失
    state = {
        showState: false
    }

    handleConfirm() {
        this.setState({showState: false})
        const {confirm} = this.props;
        confirm && confirm();
    }

    handelCancel() {
        this.setState({showState: false})
        const {cancel} = this.props;
        cancel && cancel();
    }

    componentDidMount() {
        this.props.show && this.setState({showState: this.props.show});
    }

    componentWillReceiveProps(np) {
        this.setState({showState: np.show});

    }

    render() {
        const {text} = this.props;
        const {showState} = this.state;
        var display = 'none';
        if (showState) {
            display = 'block';
        }
        return (
            <div>
                <Modal show={showState}/>
                <div className="tips tip-with-confirm-cancel" style={{ display: display }}>
                    <div className="tip">
                        <div className="text">{text}</div>
                        <div className="confirm" onClick={() => this.handleConfirm() }>确认</div>
                        <div className="cancel" onClick={() => this.handelCancel() }>取消</div>
                    </div>
                </div>
            </div>
        );
    }
}
ConfirmBox.propTypes = {
    show: React.PropTypes.bool,  //展示状态
    confirm: React.PropTypes.func,  //确认事件回调函数
    cancel: React.PropTypes.func,  //取消事件回调函数
    text: React.PropTypes.string  //提示语
};
