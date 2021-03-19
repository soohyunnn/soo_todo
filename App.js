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
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

/*
  todos: {id: Number, textValue: string, checked: boolean}
  id : 각 목록의 고유 아이디
  textValue : 목록 내용
  checked : 완료 여부, (true이면 완료 false 이면 미완료)
*/
const App: () => Node = () => {
  const [todos, setTodos] = useState([]);

  /* 
    addTodo : 할일을 추가하는 함수
    addTodo함수는 사용자가 입력한 텍스트를 인자로 받아 새로운 todo 객체를 생성합니다. id는 랜덤으로 생성되도록 하였고, 완료 여부를 나타내는 checked 속성은 false를 기본값으로 주었습니다.
    사용자가 입력한 텍스트는 textValue 속성을 들어갑니다.
    기존 할 일 목록은 현재 상태를 나타내는 todos를 이용해서 그대로 가져옵니다.
    따라서 setTodos 함수를 통해 이전에 있던 목록은 그대로 유지하면서 새로운 목록을 추가한 배열을 생성합니다.
  */
  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  //onRemove 함수에서도 setTodos를 사용하여 상태를 업데이트 해줍니다. 각 아이템의 고유 id를 받아와서 해당 아이디를 가진 아이템 객체만 제외하고 새로운 배열을 만드는 함수입니다.
  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id != id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>SOO TODO</Text>
      <View style={styles.card}>
        {/* 속성값(props)을 이용하면 컴포넌트 간 데이터를 전달 할 수 있습니다. 컴포넌트 속성을 통해 방금 만든 addTodo 함수를 TodoInsert 컴포넌트로 전달한다. */}
        <TodoInsert onAddTodo={addTodo} />
        {/* todos를 TodoList 컴포넌트에 전달합니다. , onRemove함수를 TodoList컴포넌트에 전달합니다.*/}
        <TodoList todos={todos} onRemove={onRemove} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    //flexDirection: 'column-reverse', //reㅍ
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
  // card1: {
  //   backgroundColor: 'yellow',
  //   flex: 3,
  //   borderTopLeftRadius: 10, //to provide rounded corners
  //   borderTopRightRadius: 10, //to provide rounded corners
  //   marginLeft: 10,
  //   marginRight: 10,
  // },
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
