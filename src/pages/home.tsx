import React from 'react';
import '../App.css';
import { Divider } from 'antd';
import { useNavigate } from 'react-router';

function Home(){
    const navigate = useNavigate();
    function toshapePage(){
        navigate("/shapes")
    }
    function toformPage(){
        navigate("/form")
    }
    return(
        <div className="background home">
            <div className="card" onClick={toshapePage}>
                Test 1
                <Divider/>
                Layout & Style
            </div>
            <div className="card" onClick={toformPage}>
                Test 3
                <Divider/>
                Form & Table
            </div>
        </div>
    );
}

export default Home;