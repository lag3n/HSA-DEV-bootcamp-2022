import React, { useEffect, useState } from 'react'
import { Container, Text } from './styles'

const MorningGreeting = (props) => {
  return <Text>Hello, Eric. Good Morning.</Text>
}

const AfternoonGreeting = (props) => {
  return <Text>Hello, Eric. Good Afternoon.</Text>
}

const EveningGreeting = (props) => {
  return <Text>Hello, Eric. Good Evening.</Text>
}

const Greeting = (props) => {
  if (props.hour < 12)
  {
    return <MorningGreeting />
  } 
  else if (props.hour < 17)
  {
    return <AfternoonGreeting />
  }
  else
  {
    return <EveningGreeting />
  }
}

const Time = (props) => {
  let t = props.hms;
  if (t[0] < 12)
  {
    if (t[0] === 0)
    {
      return <Text>The time is currently {12}:{t[1]}:{t[2]} am</Text>
    }
    return <Text>The time is currently {t[0] % 12}:{t[1]}:{t[2]} am</Text>
  }
  else
  {
    if (t[0] === 12)
    {
      return <Text>The time is currently {12}:{t[1]}:{t[2]} pm</Text>
    }
    return <Text>The time is currently {t[0] % 12}:{t[1]}:{t[2]} pm</Text>
  }
}

const Home = () => {
  const [time, setTime] = useState([10,10,10]);

  useEffect(() => {
    setInterval(() => {
      setTime([new Date().getHours(),(`0${new Date().getMinutes()}`).slice(-2),(`0${new Date().getSeconds()}`).slice(-2)])
    }, 1000);
  });

  return (
    <Container>
      <Greeting hour={time[0]}/>
      <Time hms={time} />
    </Container>

  )
}

export default Home
