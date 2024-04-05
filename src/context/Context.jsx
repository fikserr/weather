import { createContext, useEffect, useState } from "react"

export const  Context = createContext()

function ContextProvider({children}) {
  const [search,setSearch] = useState('Tashkent')
  const [data,setData] = useState([])
  console.log(search);
  console.log(data);
  function getData() {
      fetch(`${import.meta.env.VITE_WEATHER_API}/geo/1.0/direct?q=${search}&appid=${import.meta.env.VITE_WEATHER_KEY}`)
          .then((res)=>res.json())
          .then((data)=>fetch(`${import.meta.env.VITE_WEATHER_API}/data/2.8/onecall?lat=${data[0]['lat']}&lon=${data[0]['lon']}&exclude=hourly,minutely&units=metric&appid=${import.meta.env.VITE_WEATHER_KEY}`))
          .then(res2 => res2.json())
          .then(weather => setData(weather))
          console.log(search);
          
  }

  useEffect(()=>{
      getData()
  },[])

  return (
    <Context.Provider value={{search,setSearch,data,getData}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider