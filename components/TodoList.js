/*
  components/TodoList.js
  추가된 아이템을 스크롤 뷰를 통해 보여주는 부분입니다.
*/
import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import TodoListItem from './TodoListItem';

//todos는 할 일 목록의 객체가 담긴 배열입니다. 따라서 TodoList컴포넌트에서 TodoListItem 컴포넌트로 전달 할 때에는 배열에 담긴 객체 하나하나를 넘겨줘야합니다.
const TodoList = ({todos}) => {
  console.log('TodoList:::', todos);
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {/* map() 함수를 이용해서 todos에 담긴 아이템을 하나씩 TodoListItem 컴포넌트로 전달합니다. 
      자바스크립트의 디스트럭처링(destructuring) 문법을 이용하면 TodoListItem 컴포넌트에서 아이템 객체에 담긴 값들을 바로 받을 수 있습니다.*/}
      {todos.map(todo => (
        <TodoListItem {...todo} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;
