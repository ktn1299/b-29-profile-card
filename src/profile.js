import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/business-card-template-with-photo_23-2148599632.jpg?ga=GA1.1.1081864978.1729434222&semt=ais_hybrid" />
        <Card.Body>
          <Card.Title>Card 1</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">profile 1</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/business-card-template-with-photo_23-2148573782.jpg?ga=GA1.1.1081864978.1729434222&semt=ais_hybrid"/>
        <Card.Body>
         <Card.Title></Card.Title>
          <Card.Text>
            card 2
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">profile 2</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/premium-vector/style-modern-business-card-template_1252911-12981.jpg?ga=GA1.1.1081864978.1729434222&semt=ais_hybrid" />
        <Card.Body>
          <Card.Title>Card 3</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">profile 3</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;