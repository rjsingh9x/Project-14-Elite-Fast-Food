import { useAuthContext } from "../hooks/useAuthContext"

// components


const Home = () => {
 
  const {user} = useAuthContext()



  return (
    <h1>Hello, {user.email} </h1>
  )
}

export default Home

