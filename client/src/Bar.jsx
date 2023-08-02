import { useState } from "react";
const products = [
  { title: 'Cabbage',isFruit:false, id: 1 },
  { title: 'Garlic',isFruit:false, id: 2 },
  { title: 'Apple', isFruit:true,id: 3 },
];
const listItems = products.map((product) =>
  <li key = { product.id } style={{color: product.isFruit ? 'magenta' : 'darkgreen'}} >
   {product.title}</li>
)
export default function App() {
  
  const [todos] = useState([
    {
      title : "Gym",
      description : "Hit at 5",
      id : 1
    },
    {
      title : "Lunch",
      description : "At 2",
      id : 2
    }])

  return (
    <><div>
      {todos.map((todo) => {
        // eslint-disable-next-line react/jsx-key
        return <Todo title={todo.title} description={todo.description}></Todo>;
      })}
    </div><ul>{listItems}</ul></>

  )
}

function Todo(props){
  return <div>
    {props.title}
    {props.description}
  </div>
}

