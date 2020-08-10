import React from "react";

const TodoItemsComponent = (props) => {
  return (
    <div>
      <li>{props.listValue}</li>
      {/* <button onClick={props.doneButton}>Done</button>
      <br /> */}
      <button onClick={props.deleteButton}>Delete Item</button>
    </div>
  );
};

// function TodoItemsComponent(props) {
//   console.log("This is FirstComp Props****", props.todos);
//   return (
//     <div>
//       <h1>ToDo List</h1>
//       <ul>
//         {props.todos.map((item, index) => {
//           return <li key={index}>{props.todos[index]}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

export default TodoItemsComponent;
