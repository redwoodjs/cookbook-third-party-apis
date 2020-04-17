import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/web'

const HomePage = () => {
  const [weather, setWeather] = useState()

  // replace the URL with the real one, including your API key:
  const onSubmit = (data) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${data.zip},us&appid=YOUR_API_KEY`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.cod === '404') {
          alert(`${data.zip} is not a valid US zip code, please try again`)
        } else if (json.cod === 401) {
          alert(
            `Invalid response: did you add your API key to the OpenWeather URL?`
          )
        } else {
          setWeather(json)
        }
      })
  }

  const temp = () => Math.round(((weather.main.temp - 273.15) * 9) / 5 + 32)

  const condition = () => weather.weather[0].main

  const icon = () => {
    return `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  }

  return (
    <>
      <Form onSubmit={onSubmit} className="text-center">
        <TextField
          className="mt-24 px-4 text-4xl text-center bg-blue-100 focus:text-blue-600 outline-none border-gray-400 rounded-lg"
          name="zip"
          placeholder="Zip code"
          maxLength="5"
          validation={{ required: true, pattern: /^\d{5}$/ }}
        />
        <Submit className="ml-2 text-4xl text-white bg-blue-400 rounded-lg px-4 outline-none focus:outline-none">
          Go
        </Submit>
      </Form>
      {weather && (
        <section className="text-center">
          <h1 className="text-6xl">{weather.name}</h1>
          <h2 className="text-3xl flex justify-center items-center">
            <div className="w-12">
              <img src={icon()} style={{ maxWidth: '2rem' }} />
            </div>
            <span>
              <span className="text-red-500">{temp()}°F</span>
              <span className="text-blue-400"> and {condition()}</span>
            </span>
          </h2>
        </section>
      )}
    </>
  )
}

export default HomePage
