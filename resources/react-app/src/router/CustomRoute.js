import React, {Suspense} from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {Spinner, Container, Row, Col} from "reactstrap"


const LoadingFileSeperate = () => {
    return <Container fluid={true}>
        <Row>
            <Col xs="12" xl="12" className="text-center">
                <Spinner color="primary"/>
            </Col>
        </Row>
    </Container>
};

const CustomRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => {
        return <Suspense fallback={<LoadingFileSeperate/>}>
            <Component {...props}/>
        </Suspense>
    }}/>
}

CustomRoute.propTypes = {
    component: PropTypes.object.isRequired,
    location: PropTypes.object,
}

// Retrieve data from store as props
function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(CustomRoute)
