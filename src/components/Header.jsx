import { useContext } from 'react';
import logo from '../img/logo.svg';
import mdsearch from '../img/search.svg';
import { BsFillCloudsFill } from "react-icons/bs";
import { CiTempHigh } from "react-icons/ci";
import { MdOutlineWaterDrop } from "react-icons/md";
import { PiWind } from "react-icons/pi";
import { Context } from '../context/Context';

function Header() {
    const {search,setSearch,getData} = useContext(Context)
  return (
    <div className="header">
        <div className="container">
            <div className="header__all">
                    <div className="header__left ">
                        <img src={logo} alt="" className='header__left-img'/>
                        <div className="header__left-bottom">
                            <h1 className="header__left-degree">16°</h1>
                            <div className="header__left-info">
                                <h3 className="header__left-city">London</h3>
                                <p className="header__left-day">06:09 - Monday, 9 Sep ‘23</p>
                            </div>
                            <p className='header__left-weather'><BsFillCloudsFill /></p>
                        </div>
                    </div>

                    <form className="header__right">
                        <div className="header__right-search">
                            <input 
                            type="text"  
                            placeholder='Search Location...'
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)} />
                            <img src={mdsearch} alt="" className='header__right-img'  onClick={getData}/>
                           
                        </div>
                        <div className="header__right-details">
                                <p className="header__right-title"> Weather Details...</p>

                                <div className="header__right-box">
                                    <p className="header__right-temp">Temp</p>
                                    <p className="header__right-info">19°</p>
                                    <p className="header__right-icon"><CiTempHigh /></p>
                                </div>
                                <div className="header__right-box">
                                    <p className="header__right-temp">Humadity</p>
                                    <p className="header__right-info">58%</p>
                                    <p className="header__right-icon"><MdOutlineWaterDrop /></p>
                                </div>
                                <div className="header__right-box">
                                    <p className="header__right-temp">Cloudy</p>
                                    <p className="header__right-info">86%</p>
                                    <p className="header__right-icon"><BsFillCloudsFill /></p>
                                </div>
                                <div className="header__right-box">
                                    <p className="header__right-temp">Wind</p>
                                    <p className="header__right-info">5km/h</p>
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