import { useContext } from "react"
import Header from "./components/Header"
import { Context } from "./context/Context"
import Loader from "./components/Loader"



function App() {
  const {data} = useContext(Context)
  if (data.length <= 0 ) return <Loader/>
  return (
    <>
      <Header/>
    </>
  )
}

export default App