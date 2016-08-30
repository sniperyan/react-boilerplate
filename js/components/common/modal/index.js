import React, {Component} from 'react';
import './index.less';
/**
 * 模态框
 */
export class Modal extends Component {
    render() {
        const {show} = this.props;
        var display = 'none';
        if(show){
            display = 'block';
        }
        return (
            <div className="modal-thick" style={{display:display}}>
            </div>
        );
    }
}
Modal.propTypes = {
    show: React.PropTypes.bool  //是否展示模态框
};
