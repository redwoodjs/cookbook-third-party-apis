import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <div className="text-4xl mt-16 flex max-w-xl mx-auto">
      <div className="mx-2 w-1/2 text-center">
        <Link
          className="block w-full py-12 hover:bg-blue-500 transition duration-100 hover:text-white border border-blue-700 rounded-lg"
          to={routes.client()}
        >
          Client
        </Link>
      </div>
      <div className="mx-2 w-1/2 text-center">
        <Link
          className="block w-full py-12 hover:bg-blue-500 transition duration-100 hover:text-white border border-blue-700 rounded-lg"
          to={routes.server()}
        >
          Server
        </Link>
      </div>
    </div>
  )
}

export default HomePage
