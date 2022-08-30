import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import IMG_1824 from './IMG_1824.jpg';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup'

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className='text-center'>
          <a href="https://google.com">Source for this webpage</a>
        </Row>
        <Row className='text-center'>
          <Col className="my-auto">
            <Image src={IMG_1824} fluid roundedCircle/>
          </Col>
          <Col className="my-auto">
            <Table>
              <tbody>
                <tr>
                  <td>
                    <strong>Name:</strong>
                  </td>
                  <td>
                    Caleb Anderson
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Phone #:</strong>
                  </td>
                  <td>
                    513-304-6943
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Email:</strong>
                  </td>
                  <td>
                    ander589@miamioh.edu
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Github:</strong>
                  </td>
                  <td>
                    <a href="https://github.com/calebanderson526">calebanderson526</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>LinkedIn:</strong>
                  </td>
                  <td>
                    <a href="https://www.linkedin.com/in/caleb-anderson-61297a236/">My Profile</a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col className="my-auto">
            <ListGroup>
              <ListGroup.Item variant='primary'>
                Affiliations
              </ListGroup.Item>
              <ListGroup.Item>
                Miami University
              </ListGroup.Item>
              <ListGroup.Item>
                Miami University Blockchain Club
              </ListGroup.Item>
              <ListGroup.Item variant='primary'>
                Interests
              </ListGroup.Item>
              <ListGroup.Item>
                Fullstack Development
              </ListGroup.Item>
              <ListGroup.Item>
                Software Engineering
              </ListGroup.Item>
              <ListGroup.Item>
                Web3
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
