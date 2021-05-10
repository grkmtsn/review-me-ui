import React from 'react';
import { Story, Meta } from '@storybook/react';
import Form, { FormProps } from './Form';
import { Col, Input, Row, Button, Checkbox } from '../..';

export default {
  title: 'Atoms/Form',
  component: Form,
} as Meta;
const onSubmit = (data) => {
  console.log({ data });
};
const Template: Story<FormProps> = (args) => (
  <Form onSubmit={onSubmit}>
    <Row>
      <Col xs={12}>
        <Input
          name="username"
          label="Username"
          rules={{ required: { value: true, message: 'Zorunlu Alan' } }}
        />
      </Col>
      <Col xs={12}>
        <Input
          name="password"
          label="Password"
          rules={{ required: { value: true, message: 'Zorunlu Alan' } }}
          type="password"
        />
      </Col>
      <Col xs={12}>
        <Checkbox name="confirmed" text="Are you confirm?" />
      </Col>
      <Col xs={12}>
        <Button type="submit">Save</Button>
      </Col>
    </Row>
  </Form>
);

export const Default = Template.bind({});
Default.args = {};
