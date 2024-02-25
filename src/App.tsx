import { Col, Row } from "react-bootstrap";
import Header from "../src/assets/Header"


import { videos } from "./assets/home";
import {Videog} from "./assets/Video";


function AutoLayoutExample() {
  return (<>
    <Header></Header>
    <Row>
        <Col></Col>
        <Col className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">{videos.map(video=>(<Videog  key={video.id} {...video} ></Videog>))}</Col>
        <Col></Col>
      </Row>
    
    

    
      
    
    
    </>
  );
}

export default AutoLayoutExample;