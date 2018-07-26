import React, { Component, Fragment } from 'react';
//Fragment 是占位符 可以用来占位而不显示在页面元素上的

class TodoList extends Component {
    // 一个类就肯定有一个constructor的构造函数，这是最优先执行的函数
    constructor(props) {
        super(props);
        // console.log(props);
        // 定义数据就定义在状态里面,相当于定义在vue的data里面
        this.state = {
            inputValue: '',
            list: [],
            inputhloder: '请输入'
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    {/*在jsx语法中,变量要用括号包裹起来，绑定事件，要大写例如：onChang  */}
                    {/*在绑定事件时候记得用bind来调整作用域  */}
                    <input 
                        type="text" 
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange.bind(this)}
                        placeholder={this.state.inputhloder}
                    />&nbsp;&nbsp;&nbsp;
                <button onClick={this.handelBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {/*用map做循环，写一个函数  ,接收2个参数 item内容  index对应的索引*/}
                    {
                        this.state.list.map((item, index) => {
                            {/*每一次循环都加上一个key值才不会报警告  */}
                            return <li 
                            key={index}
                            onClick={this.handelItemDelete.bind(this, index)}
                            >{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    // input框里面change的方法,接收event对象
    handleInputChange(e) {
        // console.log(e.target.value)
        // 如果this.state.inputValue获取不到就打印看看这个this的指向,获取不到就可以使用es6的bind(this)来指向
        // console.log(this)

        // 这样是没有效果的
        // this.state.inputValue = e.target.value;
        // console.log(this.state.inputValue)
        
        // react给每个组件设置了一个方法 this.setstate({里面是你在上面绑定的数据，可以用这个方法改变})
        this.setState({
            inputValue: e.target.value
        });
    }

    // 提交按钮点击事件
    handelBtnClick() {
        this.setState({
            // ...是es6的扩展符，这样就可以展开在数组里面所有的东西
            list: [...this.state.list, this.state.inputValue],
            // 新增完后就清空input框里面的东西
            inputValue: ''
        })
    }

    // 点击删除
    handelItemDelete(index) {
        // 在绑定事件的时候传入他的index索引过来接收
        console.log(index)
    }
}
//写完这些要在这里导入出去
export default TodoList;