import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './store.less'
export default class Store extends Taro.Component {
  constructor(){
    super(...arguments);
    this.state={
			"store":{
				title:"川湘居",
				notice:"欢迎光临，很高兴为您服务~",
				tags:["味道赞","主食真好","分量足"]
			}
		}
  }
  render() {
    const {store} = this.state;
    return (
      <View className="store">
        <Image className="img" src={require("../../assets/img/store.jpg")}></Image>
        <View className="text">
          <Text className="title">{store.title}</Text>
          <Text className="title">{store.notice}</Text>
          <View>
            {store.tags.map((item, index)=>{
              return <Text className="tags_text" key={index}>{item}</Text>
            })}
          </View>
        </View>
      </View>
    );
  }
}
