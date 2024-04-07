


function Card({dailyData}) {
  const currentUnixTimeMilliseconds = dailyData?.dt * 1000; 
  const currentDate = new Date(currentUnixTimeMilliseconds); 
  const options = { weekday: 'long', };
  const formattedDate = currentDate.toLocaleString('en-US', options);
  return (
    <div className="card"  >
    <div className="card__left">
        <img src={` https://openweathermap.org/img/wn/${dailyData.weather[0].icon}@2x.png`} alt={dailyData.weather[0].description}   className="card__left-img"/>
        <div className="card__week">
            <p className="card__week-title">{formattedDate}</p>
            <p className="card__week-weather">{dailyData?.weather[0].main}</p>
        </div>
    </div>

    <p className="card__temp">{Math.round(dailyData?.temp.day)}°</p>
    </div>
  )
}

export default Card