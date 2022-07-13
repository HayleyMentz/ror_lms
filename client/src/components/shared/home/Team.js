import { Container, Row, Col, Card } from 'react-bootstrap';

const Team = () => (
<Container>
<h1>Team Members</h1>
<Row>
  <Col>
  <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.body>
    <Card.Title>Josh R.</Card.Title>
  </Card.body>
</Card>
</Col>
  <Col>
  <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.body>
    <Card.Title>Julia C.</Card.Title>
  </Card.body>
</Card>
</Col>
  <Col>
  <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.body>
    <Card.Title>Adam C.</Card.Title>
  </Card.body>
</Card>
</Col>
  <Col>
  <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.body>
    <Card.Title>Angelina R.</Card.Title>
  </Card.body>
</Card>
</Col>
</Row>




</Container>

)

export default Team;