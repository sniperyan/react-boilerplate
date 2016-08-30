import React, {Component} from 'react';
import { IntervalEnhance,connect } from "./enhance";
/**
 * 我们有一个IntervalEnhance组件，我们在CartItem组件中导入它，
 * 并通过它来包裹原有的导出对象
 */
class CartItem extends Component {
     render() {
        return     <div>    
                <p>
                    <strong>Time elapsed for interval: </strong>
                    {this.props.seconds} s
                </p>    
                </div>
            
        }
}
export default IntervalEnhance(CartItem);