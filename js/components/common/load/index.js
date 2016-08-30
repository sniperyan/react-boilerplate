import React, {Component} from 'react';
import {Modal} from 'js/components/common/modal';
import './index.less';
/**
 * 加载动画1
 */
export class Loading extends Component {
    render() {
        const {show} = this.props;
        var display = 'none';
        if (show) {
            display = 'block';
        }
        return (
            <div>
                <Modal show={show}/>
                <div className="spinner" style={{ display: display }}>
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                </div>
            </div>

        );
    }
}
Loading.propTypes = {
    show: React.PropTypes.bool  //是否展示加载动画
};
