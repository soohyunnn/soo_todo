/*
  components/TodoInsert.js
  텍스트 입력창과 추가 버튼이 들어갈 부분입니다.
*/
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

/*
  App.js 에서 속성으로 전달한 함수는 TodoInsert 컴포넌트에서 아래와 같이 받아 올 수 있습니다.
*/
const TodoInsert = ({onAddTodo}) => {
  //TextInput에서 텍스트 값을 받아오기 위해서는 텍스트 값의 상태 관리가 필요합니다. useState 훅을 이용하여 사용자가 입력한 텍스트 값의 상태를 관리합니다.
  const [newTodoItem, setNewTodoItem] = useState('');

  //텍스트 값은 문자열(string)이므로 초기 상태값은 ''로 초기화 합니다. newTodoItem는 새로 입력한 텍스트의 상태를 나타내고, setNewTodoItem은 newTodoItem을 업데이트하는 함수입니다.
  //실시간으로 사용자가 입력한 텍스트 값의 변화를 관리하기 위한 핸들러 함수(todoInputHandler)를 만듭니다.
  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  //아이템을 추가해주는 핸들러 함수
  //addTodoHandler함수 안에는 onAddTodo와 setNewTodoItem가 있습니다.
  //onAddTodo함수는 사용자가 입력한 텍스트 값을 전달 받아 목록에 추가하고, setNewTodoItem함수는 입력창을 공백으로 초기화 시키는 역할을 합니다.
  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };

  return (
    <View style={styles.inputContainer}>
      {/* TextInput 컴포넌트의 속성으로 onChangeText를 추가하였고 그 안에 todoInputHandler를 넣어줍니다. 또한 value 속성에서 newTodoItem을 넣어줍니다.
      이제 입력창에 텍스트를 입력하면 실시간으로 입력한 텍스트 값의 상태가 업데이트 되며 newTodoItem에는 텍스트 값의 최신 상태가 담기게 됩니다. */}
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={'#999'}
        onChangeText={todoInputHandler}
        value={newTodoItem}
        autoCorrect={false}
      />
      <View styles={styles.button}>
        {/* Button 컴포넌트에서 기본적으로 제공하는 onPress 이벤트에 addTodoHandler() 핸들러를 넣어줍니다. 이제 사용자가 ADD 버튼을 누르면 아이템이 추가됩니다. */}
        <Button title={'ADD'} onPress={addTodoHandler}></Button>
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
