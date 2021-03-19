/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  Dimensions,
  View,
  Platform,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const {height, width} = Dimensions.get('window');

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>SOO TODO</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="New ToDo" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
  },
  appTitle: {
    color: 'white',
    fontSize: 30,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#F23657',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, //to provide rounded corners
    borderTopRightRadius: 10, //to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});

export default App;

//쉐도우는 플래폼마다 약간 다르다(ios/android) => platform-specific code를 해야함(안드로이드 타겟일지, ios 타겟일지 선택해서)
//ios는 shadowOffset 사용
//안드로이드에서는 elevation 이라는 걸 사용해야함 0~5까지 있음
//=> 각각 다른 파일로 만들지 않고 Platform 을 사용하여 설정
