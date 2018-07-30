import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handelClick = this.handelClick.bind(this);
    }

    render() {
        return (
            <div
                onClick={this.handelClick}
            >
            {/*通过this.props.xxx来接收父组件传过来的属性  */}
                {this.props.test} - {this.props.content}
            </div>
        )
    }

    handelClick() {
        // 在这里接收了父组件传过来的索引
        // console.log(this.props.index)
        // 在子组件接收父组件的方法适合也是用this.props来接收，只是要在父组件那里强行控制this的指向
        this.props.delteItem(this.props.index)
    }
}

// 要做属性校验,注意这里的是小写
TodoItem.propTypes = {
    // 要帮content做校验,要求是字符串类型
    content: PropTypes.string,
    // delteItem的类型是函数类型
    delteItem: PropTypes.func,
    // index的是数字类型
    index: PropTypes.number,
    // isRequired是说必须要传值
    test: PropTypes.string.isRequired
}

// 做默认属性的值
TodoItem.defaultProps = {
    test: 'this is a'
}

export default TodoItem;