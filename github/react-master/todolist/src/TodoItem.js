import React, { Component } from 'react'

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
                {this.props.content}
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

export default TodoItem;