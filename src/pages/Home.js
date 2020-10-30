import {React, Component} from 'react'
import {Col,Row} from 'react-bootstrap'
import Card from '../components/Card'
import Jumbotroon from '../components/Jumbotroon'
import Product3 from '../assets/product3.jpg'
import Product2 from '../assets/product2.jpg'
import ladiesInTech from '../assets/ladiesInTech.jpg'
// import css
import '../App.css'
class Home extends Component {
    render(){
        return(
            <>
            <div>
                <Jumbotroon />
            </div>
            <section className="container">
                <div className="mb-4">
            <Row>
            <Col className="Col_mb--4" xs={12} lg={4}>

            <Card 
            src={Product3}
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur mollis nisl et pellentesque. Suspendisse vitae molestie tellus.'
            label='advance to 3d'
            path='/service'

            />
            </Col>
            <Col className="Col_mb--4" xs={12} lg={4}>

            <Card 
            src={Product3}
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur mollis nisl et pellentesque. Suspendisse vitae molestie tellus.'
            label='advance to 3d'
            path='/service'

            />
            </Col>
            <Col className="Col_mb--4" xs={12} lg={4}>
            <Card 
            src={ladiesInTech}
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur mollis nisl et pellentesque. Suspendisse vitae molestie tellus.'
            label='Ladies on tech'
            path='/service'

            />
            </Col>
            </Row>
            </div>
            <div>
            <Row>
            <Col className="Col_mb--4" xs={12} lg={3}>

            <Card 
            src={Product3}
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur mollis nisl et pellentesque. Suspendisse vitae molestie tellus.'
            label='advance to 3d'
            path='/service'

            />
            </Col>
            <Col className="Col_mb--4" xs={12} lg={3}>

            <Card 
            src={Product3}
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur mollis nisl et pellentesque. Suspendisse vitae molestie tellus.'
            label='advance to 3d'
            path='/service'

            />
            </Col>
            <Col className="Col_mb--4" xs={12} lg={3}>
            <Card 
            src={ladiesInTech}
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur mollis nisl et pellentesque. Suspendisse vitae molestie tellus.'
            label='Ladies on tech'
            path='/service'

            />
            </Col>
            <Col className="Col_mb--4" xs={12} lg={3}>
            <Card 
            src={ladiesInTech}
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur mollis nisl et pellentesque. Suspendisse vitae molestie tellus.'
            label='Ladies on tech'
            path='/service'

            />
            </Col>
            </Row>
            </div>
            </section>
            </>
        )
    }
}
export default Home;