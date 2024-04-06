import { useContext } from 'react';
import { Context } from '../context/Context';
import logo from '../img/logo.svg';
import { BsFillCloudsFill } from "react-icons/bs";
import { CiTempHigh } from "react-icons/ci";
import { MdOutlineWaterDrop } from "react-icons/md";
import { PiWind } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";


function Header() {
    const {search,setSearch,getData,data} = useContext(Context)
    const current = data.current;
    const currentUnixTimeMilliseconds = current?.dt * 1000; 
    const currentDate = new Date(currentUnixTimeMilliseconds); 
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', };
    const formattedDate = currentDate.toLocaleString('en-US', options);
    console.log(current.temp);
    if (current.clouds >= 30 && current.humidity <= 40) {
        document.documentElement.dataset.theme = "cloudy"
    }else if (current.humidity >= 40 &&  current.clouds >= 30) {
        document.documentElement.dataset.theme = "rainy"
    }else if (current.humidity <= 30 || current.clouds <= 30 && current.temp >= 10) {
        document.documentElement.dataset.theme = "sunny"
    }else if (current.humidity >= 30 && current.clouds >= 30 && current.temp >= -10) {
        document.documentElement.dataset.theme = "winter"
    }else if (current.humidity >= 30 || current.clouds >= 30 && current.wind_speed >= 15) {
        document.documentElement.dataset.theme = "wind"
    }
    
  return (
    <div className="header">
        <div className="container">
            <div className="header__all">
                    <div className="header__left ">
                        <img src={logo} alt="" className='header__left-img'/>
                        <div className="header__left-bottom">
                            <h1 className="header__left-degree">{Math.round(current?.temp)}°</h1>
                            <div className="header__left-info">
                                <h3 className="header__left-city">Сегодня</h3>
                                <p className="header__left-day">{formattedDate}</p>
                            </div>
                            <p className='header__left-weather'><BsFillCloudsFill /></p>
                        </div>
                    </div>

                    <form className="header__right">
                        <div className="header__right-search">
                            <input 
                            id='input'
                            type="text" 
                            placeholder='Search...'
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)} 
                            />
                            <button  onClick={getData}><IoSearch /></button>
                           
                        </div>
                        <div className="header__right-details">
                                <p className="header__right-title"> Weather Details...</p>

                                <div className="header__right-box">
                                    <p className="header__right-temp">Temp</p>
                                    <p className="header__right-info">{Math.round(current?.temp)}°</p>
                                    <p className="header__right-icon"><CiTempHigh /></p>
                                </div>
                                <div className="header__right-box">
                                    <p className="header__right-temp">Humadity</p>
                                    <p className="header__right-info">{Math.round(current?.humidity)}%</p>
                                    <p className="header__right-icon"><MdOutlineWaterDrop /></p>
                                </div>
                                <div className="header__right-box">
                                    <p className="header__right-temp">Cloudy</p>
                                    <p className="header__right-info">{Math.round(current?.clouds)}%</p>
                                    <p className="header__right-icon"><BsFillCloudsFill /></p>
                                </div>
                                <div className="header__right-box">
                                    <p className="header__right-temp">Wind</p>
                                    <p className="header__right-info">{Math.round(current?.wind_speed)}km/h</p>
                                    <p className="header__right-icon"><PiWind /></p>
                                </div>
                        </div>
                    </form>
            </div>
                

        </div>

    </div>
  )
}

export default Header