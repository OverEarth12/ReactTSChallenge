import React, { useState } from 'react';
import { Layout, Space, Divider } from 'antd';
import '../App.css';
const { Header, Footer, Sider, Content } = Layout;



function ShapesPage() {
  const [shapes, setShapeArray] = useState(["square",
  "circle",
  "oval",
  "trapezoid",
  "rectangle",
  "parallelogram"])

  const nextShape = () => {
    let newShapearr = [...shapes]
    let lastShape = newShapearr.pop()!
    newShapearr.unshift(lastShape)
    setShapeArray(newShapearr)  

  }

  const prevShape = () => {
    let newShapearr = [...shapes]
    let firstShape = newShapearr.shift()!
    newShapearr.push(firstShape)
    setShapeArray(newShapearr)
  }

  const swapPosition = () => {
    let above = shapes.slice(0,3)
    let below = shapes.slice(3,6)
    setShapeArray([...below, ...above])
  }

  const shuffleShape = () => {
    let shufflearr = [...shapes]
    shufflearr.sort((a, b) => 0.5 - Math.random())
    setShapeArray(shufflearr)
  }

  return (
    <div className="shapesPage">
      <Layout className='background'>
        <Header className='background header'><h2>Layout & Style</h2></Header>
        
      <Content className='background'>
        <div className='ButtonBar'>
            <div className="card" onClick={prevShape}><div className='arrowleft'></div> <span><a>Move Shape</a></span> </div>
            <div className="card big" onClick={swapPosition}><div className='arrowup'></div><div className='arrowdown'></div> <span><a>Move Position</a></span></div>
            <div className="card" onClick={nextShape}><div className='arrowright'></div> <span><a>Move Shape</a></span> </div>
        </div>
        
        
        
      </Content>
      <Divider/>
      <Footer className='background'>
      <div className='shapeSection'>
        <div className="above">
          <div className='card dummy'></div>
          <div onClick={shuffleShape} className="card"><div className={shapes[0]}></div></div>
          <div onClick={shuffleShape} className="card"><div className={shapes[1]}></div></div>
          <div onClick={shuffleShape} className="card"><div className={shapes[2]}></div></div>
        </div>
        <div className="below">
          <div onClick={shuffleShape} className="card"><div className={shapes[3]}></div></div>
          <div onClick={shuffleShape} className="card"><div className={shapes[4]}></div></div>
          <div onClick={shuffleShape} className="card"><div className={shapes[5]}></div></div>
        </div>
          
        </div>
      </Footer>
      </Layout>
      
      
    </div>
  );
}

const headerStyle: React.CSSProperties = {
  margin: "auto",
  padding: "auto",
  width:"100%",
  backgroundImage: "linear-gradient(to left, #6eda78, #ffa200 )"
};

const contentStyle: React.CSSProperties = {
  padding: "auto",
  justifyContent: 'center',
  display: "flex",
  height: "100%",
  backgroundImage: "linear-gradient(to left, #6eda78, #ffa200 )"

};

  

export default ShapesPage;
