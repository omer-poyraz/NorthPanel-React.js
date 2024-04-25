import React from 'react'
import { Col, Row } from 'reactstrap'
import LeftMenu from './leftmenu'
import Content from './content'

const Main = () => {
    return (
        <Row className='m-0 p-0'>
            <Col md={3} className='p-0 m-0 shadow'>
                <LeftMenu />
            </Col>
            <Col md={9} className='p-0 m-0'>
                <Content />
            </Col>
        </Row>
    )
}

export default Main