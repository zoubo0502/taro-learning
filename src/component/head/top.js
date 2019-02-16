import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './top.less'

export default class Top extends Taro.Component {
  render() {
    return (
      <View className="top">
        <View className="left">
          <Image className="img" src={require("../../assets/img/left.png")}></Image>
        </View>
        <View className="right">
          <Image className="img" src={require("../../assets/img/collect.png")}></Image>
          <Image className="img" src={require("../../assets/img/tuan.png")}></Image>
          <Image className="img" src={require("../../assets/img/search.png")}></Image>
          <Image className="img" src={require("../../assets/img/lue.png")}></Image>
        </View>
      </View>
    );
  }
}
