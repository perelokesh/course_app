import { useState , useEffect } from "react";


function MyButton() {
    const [todo, setTodo] = useState({
      todo:"king of pirates",
      description:"Gol D Roger",
      id:1
    });
    setInterval(()=> {
      setTodo({todo:"king of pirates for new era", description:"Monkey D Luffy", id:1})
    },7000)

  const [count, setCount ] = useState(0);
  const click = () => {
    setCount(count + 1);
  };
  const anime = ["Luffy", "Zoro", "Nami","Sanji"];
  const [course, setCourse] = useState([]);
  useEffect(()=>{
   fetch("http://localhost:3002/admin/getcourses", {
    method: "GET",
   }).then((response)=>{
    response.json().then((data)=>{
      console.log('Courses', data);
      setCourse(data);
    })
   })
 
  },[]);
  return (
      <>
      <p>{course}</p>
      <h2>count {count}</h2>
      <button onClick={click}>count</button>
      <ul>
        {anime.map(item => <li key={item}>{item}</li>)}
        <li>
        {todo.todo}
      </li>
      {todo.description}
        </ul>
      </>
  )
}

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}