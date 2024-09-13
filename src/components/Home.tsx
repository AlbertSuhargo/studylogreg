import { View, Text } from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Text onPress={()=>navigation.navigate('Login')}>Back</Text>
    </View>
  );
};

export default Home;
