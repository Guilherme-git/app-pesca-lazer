import * as React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Image, StatusBar } from 'react-native';
import { Card, Title, Paragraph, Avatar} from 'react-native-paper';
import imgAvatar from './../assets/avatarTest.png';

const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index+1}`
});

const getItemCount = (data) => 5;

const Item = ({ title }) => (
  <View style={styles.item}>
    <Card>
      <Card.Cover source={{ uri: 'https://cdn.leouve.com.br/2019/07/IMG-1882_d_0_0_800.20181026100630.jpg' }}/>

      <Card.Content>
        <Title ><Avatar.Image style={styles.avatar} size={60} source={require('../assets/avatarTest.png')} />{title}</Title>
        <Paragraph>descrição</Paragraph>
      </Card.Content>
    </Card>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {

    height: 250,
    justifyContent: 'center',
    marginVertical: 18,
    marginHorizontal: 1,
    padding: 20,
  },
  avatar:{
    marginTop: StatusBar.currentHeight,
    justifyContent: 'center',
    flex: 1,
    marginRight:30,
    backgroundColor:'#1c7acb',
  },
});

export default App;
