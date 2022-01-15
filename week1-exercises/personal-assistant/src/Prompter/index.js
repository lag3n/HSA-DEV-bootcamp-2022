import React, { useState } from 'react'
import { Container, Text, Text1, Button, Button1, Input, Input1 } from './styles'

let TASKS = [];

const ToDoItem = (prop) => {
  const [bool, setBool] = useState(true)

  if (bool)
  {
    return (
      <tr>
        <td><Input id={"check"+prop.id} type='checkbox' defaultChecked={prop.completed} /></td>
        <td><Text1>{prop.text}</Text1></td>
        <td><Button1 id={prop.id} type="submit" onClick={() => setBool(false)}><Text>Delete</Text></Button1></td>
      </tr>
    )
  } 
  else
  {
    let index;
    for(let i = 0; i < TASKS.length; i++)
    {
      if(TASKS[i].name === prop.text)
      {
        index = i;
        break;
      }
    }
    TASKS.splice(index,1);
    return null;     
  }
}

const Prompter = () => {
  const [MiniToDo, setMiniToDo] = useState('')
  const [fil, setFil] = useState('')
  
  if (MiniToDo !== '')
  {
    let newId = "item" + (TASKS.length+1);
    let text = MiniToDo;
    TASKS.push({ id:newId, key:newId, name:text, completed:false });
    document.getElementById("add").value = ''
    setMiniToDo('')
  }

const editTask = TASKS.filter(e => e.name.includes(fil))

  if (fil !== '')
  {
    return (  
      <Container>
        <Text>What needs to be done?</Text>
        <table>
          <tbody>
            <tr>
            <td>
              <Input id="add" type="text" />
            </td>
            <td>
              <Button onClick={() => setMiniToDo(document.getElementById("add").value)}>
                <Text>Add</Text>
              </Button>
            </td>
            </tr>
          </tbody>
        </table>
        <Text>Filter through your tasks!</Text>
        <Input1 id="filter" type="text" onChange={() => setFil(document.getElementById("filter").value)}/>
        <Text></Text>
        <Text> To Do List:</Text>
        <Table toDo={editTask} />
      </Container>
    )
  } else 
  {
    return (  
      <Container>
        <Text>What needs to be done?</Text>
        <table>
          <tbody>
            <tr>
            <td>
              <Input id="add" type="text" />
            </td>
            <td>
              <Button onClick={() => setMiniToDo(document.getElementById("add").value)}>
                <Text>Add</Text>
              </Button>
            </td>
            </tr>
          </tbody>
        </table>
        <Text>Filter through your tasks!</Text>
        <Input1 id="filter" type="text" onChange={() => setFil(document.getElementById("filter").value)}/>
        <Text></Text>
        <Text> To Do List:</Text>
        <Table toDo={TASKS} />
      </Container>
    )
  }
}

const Table = (props) => {
  if (props.toDo.length === 0)
  {
    return (<Text>No Tasks! Yippee!</Text>)
  } else {
    return (
      <table>
    <tbody>
    {props.toDo.map(task => (
    <ToDoItem id={task.id} key={task.id} text={task.name} completed={task.completed} />
  ))}
    </tbody>
  </table>
    )
  }
}

export default Prompter
