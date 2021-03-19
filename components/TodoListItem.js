/* 
  components/TodoListItem.js
  추가된 아이템 하나를 나타내는 부분입니다. 해당 아이템이 완료 되었는지 아닌지의 여부를 나타내는 상태값을 
  가지게 되며 완료 체크 이벤트와 삭제 이벤트 기능을 다루게 됩니다.
*/
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

/*
  todos: {id: Number, textValue: string, checked: boolean}
  id : 각 목록의 고유 아이디
  textValue : 목록 내용
  checked : 완료 여부, (true이면 완료 false 이면 미완료)
*/
const TodoListItem = () => {
  const [todos, setTodos] = useState([]);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.completeCircle}>
          <Icon name="circledowno" size={30} color="#F23657" />
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, styles.strikeText]}>
        Items will be shown here
      </Text>
      <Text style={styles.buttonContainer}>
        <Icon name="delete" size={30} color="#F23657" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'red',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoListItem;
