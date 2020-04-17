export const QUERY = gql`
  query($zip: String!) {
    weather: getWeather(zip: $zip) {
      zip
      city
      conditions
      temp
      icon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div className="text-center mt-2">
    <span className="bg-red-200 text-red-700 py-2 px-4 inline-block rounded border border-red-700">
      {error.message.replace('GraphQL error: ', '')}
    </span>
  </div>
)

export const Success = ({ weather }) => {
  return (
    <section className="text-center">
      <h1 className="text-6xl">{weather.city}</h1>
      <h2 className="text-3xl flex justify-center items-center">
        <div className="w-12">
          <img src={weather.icon} className="" />
        </div>
        <span>
          <span className="text-red-500">{weather.temp}°F</span>
          <span className="text-blue-400"> and {weather.conditions}</span>
        </span>
      </h2>
    </section>
  )
}
