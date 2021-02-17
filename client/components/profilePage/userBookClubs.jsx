import React from 'react';
import { Card, Col, Row, Tab, Tabs } from 'react-bootstrap';

export default function UserBookClubs({user = {}}) {
  return (
    <>
    <Row>
      <Col>
        <p>{user.username}'s Book Clubs</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <p>Book Club Name</p>
          <p>Book club description.</p>
        </Card>
      </Col>
      <Col>
        <Card>
          <p>Book Club Name</p>
          <p>Book club description.</p>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <p>Book Club Name</p>
          <p>Book club description.</p>
        </Card>
      </Col>
      <Col>
        <Card>
          <p>Book Club Name</p>
          <p>Book club description.</p>
        </Card>
      </Col>
    </Row>
    </>
  )
}