import {React , Component} from 'react'
import {Jumbotron,Row,Col} from 'react-bootstrap'
import CustomButton from '../components/CustomButton'
//imports css

import './Jumbotron.css'

class Hero extends Component {
    render(){
        return(
            <>
            <Jumbotron className="jumbotron_container">
  <div className='justify-content-center hero_content'>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <Row>
      <Col>
            <CustomButton buttonStyle='primary' href="/pages/Contact">Get inTouch</CustomButton>
      </Col>
  </Row>

  </div>
</Jumbotron>
            </>
        )
    }
}

export default Hero;