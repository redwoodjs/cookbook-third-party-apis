import { Form, TextField, Submit } from '@redwoodjs/web'
import { useState } from 'react'
import WeatherCell from 'src/components/WeatherCell'

const HomePage = () => {
  const [zip, setZip] = useState()

  const onSubmit = (data) => {
    setZip(data.zip)
  }

  return (
    <>
      <Form onSubmit={onSubmit} className="text-center">
        <TextField
          name="zip"
          className="mt-24 px-4 text-4xl text-center bg-blue-100 focus:text-blue-600 outline-none border-gray-400 rounded-lg"
          placeholder="Zip code"
          maxLength="5"
          validation={{ required: true, pattern: /^\d{5}$/ }}
        />
        <Submit className="ml-2 text-4xl text-white bg-blue-400 rounded-lg px-4 outline-none focus:outline-none">
          Go
        </Submit>
      </Form>
      {zip && <WeatherCell zip={zip} />}
    </>
  )
}

export default HomePage
