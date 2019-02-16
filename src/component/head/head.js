import Taro from '@tarojs/taro';
import { View, Text, Image} from '@tarojs/components';
import Top from './top';
import './head.less'
import Store from './store';
import Activity from './activity';

export default class Head extends Taro.Component {
  render() {
    return (
      <View className="head">
        <Top></Top>
        <Store></Store>
        <Activity></Activity>
        <Image className="back" src={require("../../assets/img/back.jpg")}></Image>
      </View>
    );
  }
}
