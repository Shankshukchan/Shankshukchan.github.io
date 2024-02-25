import ListGroup from 'react-bootstrap/ListGroup';

function Content(){
    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
      };
    return(
        <> <ListGroup>
            <ListGroup.Item action onClick={alertClicked} variant='dark' style={{color:"black"}}>
            <i className="fa-solid fa-user"></i> Your Channel
      </ListGroup.Item><br></br>

      <ListGroup.Item action onClick={alertClicked} variant='dark' style={{color:"black"}}>
      <i className="fa-solid fa-clock-rotate-left"></i> History
      </ListGroup.Item><br></br>

      <ListGroup.Item action onClick={alertClicked} variant='dark' style={{color:"black"}}>
      <i className="fa-solid fa-play"></i> Your Videos
      </ListGroup.Item><br></br>

      <ListGroup.Item action onClick={alertClicked} variant='dark' style={{color:"black"}}>
      <i className="fa-solid fa-thumbs-up"></i> Likes
      </ListGroup.Item><br></br>

      <ListGroup.Item action onClick={alertClicked} variant='dark' style={{color:"black"}}>
      <i className="fa-solid fa-fire"></i> Trends
      </ListGroup.Item>
      
      
    </ListGroup>
    </>
    )

}
export default Content;