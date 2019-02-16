import Taro, {Component} from '@tarojs/taro';
import  {View, Text, Button} from '@tarojs/components';

class Child extends Component {
  render() {
    return (
      <View>
        {this.props.name}
        <Button onClick={this.props.onChange}>改变父组件</Button>
      </View>
    )
  }
}

export default Child;