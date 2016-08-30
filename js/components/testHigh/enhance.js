import React, {Component} from 'react';

/**
 * 为了能够更好的进行说明，我们将不会修改CartItem组件的代码。
 * 而是通过提供一些能够包裹CartItem组件的组件， 并通过一些额外的功能来“增强”CartItem组件。
 * 这样的组件我们称之为高阶组件（Higher-Order Component）。
 */
export let IntervalEnhance = ComponsedComponent => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: this.props.seconds
        };
    }


    componentDidMount() {

        this.interval = setInterval(this.tick.bind(this), 1000);
    }


    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({
            seconds: this.state.seconds + 1
        });
    }

    render() {

        /**
         * 传递进来的组件，有seconds props，高阶组件有seconds state
         * 渲染的时候，重名的属性，后面会覆盖前面的，所以传递进来的属性，就变成了高阶
         * 组件的状态，这样在ComponsedComponent里就可以改变seconds了
         */
        return <ComponsedComponent {...this.props} {...this.state} />;
    }
}
//export default connect('a','b')(CartItem);
/**
 * 模仿react-redux 的 connect写法
 */
export let connect = (mapStateToProps, mapDispatchToProps) => WrappedComponent => class extends Component {
    state = {
        others: {}
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }


    render() {
        const {others} = this.state
        const props = {
            ...this.props,
            mapStateToProps,
            mapDispatchToProps,
            ...others
        }
        return <WrappedComponent {...props} />
    }
}