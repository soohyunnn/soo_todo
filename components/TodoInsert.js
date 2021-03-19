/*
  components/TodoInsert.js
  텍스트 입력창과 추가 버튼이 들어갈 부분입니다.
*/
import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const TodoInsert = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={'#999'}
        autoCorrect={false}
      />
      <View styles={styles.button}>
        <Button title={'ADD'}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInsert;
