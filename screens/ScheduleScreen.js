// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import CalenderScreen from './CalenderScreen';
import { ListItem, Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export default class ScheduleScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      array:[
        'Hello',
        'Bye',
        'See you later',
      ]
    }
  }
  keyExtractor = (item, index) => index.toString();

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={'Hello'}
        subtitle={'Testing sugar coated bagels'}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        leftElement = {
          <Image style = {{width:50, height:50}} source = {{uri:'./assets/scheduling.png'}} />
        }
        rightElement={
            <Icon name = 'books' type = 'font-awesome'/>
          }
        bottomDivider
      />
    )
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> {this.state.selectedStartDate} </Text>
        <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.array}
                renderItem={this.renderItem}
              />
      </View>
    );
  }
}
