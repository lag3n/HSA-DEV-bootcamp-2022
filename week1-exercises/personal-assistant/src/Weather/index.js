import React, { useEffect, useState } from 'react'
import { Container, Text } from './styles'

const Weather = () => {
  const [weather, setWeather] = useState({})
  const [temp, setTemp] = useState({})

  useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=cambridge&appid=886705b4c1182eb1c69f28eb8c520e20")
			const data = await res.json()
			setWeather(data.weather[0])
      setTemp(data.main)
		}
  fetchData()	
  }, [])

  return (
    <Container>
      <Text>Here's the weather in Cambridge for the moment: {weather.main} ({weather.description})</Text>
      <Text>It feels like {Math.round(((temp.feels_like - 273.15)*1.8)+32)}&deg;F, where the high is {Math.round(((temp.temp_max - 273.15)*1.8)+32)}&deg;F and the low is {Math.round(((temp.temp_min - 273.15)*1.8)+32)}&deg;F.</Text>
    </Container>
  )
}

export default Weather
