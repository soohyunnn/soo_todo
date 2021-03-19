/* 
  components/TodoListItem.js
  추가된 아이템 하나를 나타내는 부분입니다. 해당 아이템이 완료 되었는지 아닌지의 여부를 나타내는 상태값을 
  가지게 되며 완료 체크 이벤트와 삭제 이벤트 기능을 다루게 됩니다.
*/
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoListItem = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.circle} />
      </TouchableOpacity>
      <Text style={styles.text}>TodoList item will be shown here</Text>
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
});

export default TodoListItem;
