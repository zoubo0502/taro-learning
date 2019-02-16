import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import Child from './child';

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(props){
    super(props);
    this.state = {
      name: '张三'
    }

    this.changName = this.changName.bind(this);
  }

  componentWillMount () { }

  componentDidMount () { 
    
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  changName(){
    this.setState({name:'李四'},()=>{
      console.log(this.state.name);
    });
  }
  render () {
    return (
      <View className='index'>
        <Button onClick={this.changName}>改变名称</Button>
        
        <Text>{this.state.name}</Text>

        <Child name={this.state.name} onChange={this.changName.bind(this)}/>
      </View>
    )
  }
}

