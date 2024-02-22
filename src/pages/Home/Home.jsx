import { Helmet } from "react-helmet-async"
import Categories from "../../components/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {  
  return (
    <div>
      {/* <h1>Welcome to StayVista</h1> */}
      <Helmet>
          <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>

      {/* Categories section */}
      <Categories></Categories>
      {/* Rooms Section */}
      <Rooms></Rooms>
    </div>
  )
}

export default Home
