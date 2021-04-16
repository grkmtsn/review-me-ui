import React from 'react';
import { Story, Meta } from '@storybook/react';
import Col, { ColProps } from './Col';
import Container from '../container';
import Row from '../row';

export default {
  title: 'Atoms/Col',
  component: Col,
} as Meta;

const Template: Story<ColProps> = (args) => (
  <Container>
    <Row>
      <Col xs={12} sm={6} md={3} lg={3} xl={3} debug>
        xs-12
      </Col>
      <Col xs={12} sm={6} md={3} lg={3} xl={3} debug>
        xs-12
      </Col>
      <Col xs={12} sm={6} md={3} lg={3} xl={3} debug>
        xs-12
      </Col>
      <Col xs={12} sm={6} md={3} lg={3} xl={3} debug>
        xs-12
      </Col>
    </Row>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  debug: true,
  children: 'Lorem Ipsum Dolor',
};
