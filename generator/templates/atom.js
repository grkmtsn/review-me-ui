exports.component = (name) => {
  return `import React from 'react';
import { Styled${name} } from './styles';
  
export interface ${name}Props {
  children: React.ReactNode;
}
  
const ${name} = ({ children, ...rest }: ${name}Props): JSX.Element => (
  <Styled${name} {...rest}>{children}</Styled${name}>
);
        
export default ${name};\n`;
};

exports.story = (name, type) => {
  return `import React from 'react';
import { Story, Meta } from '@storybook/react';
import ${name}, { ${name}Props } from './${name}';
      
export default {
  title: '${type}s/${name}',
  component: ${name},
} as Meta;
      
const Template: Story<${name}Props> = (args) => <${name} {...args} />;
      
export const Default = Template.bind({});
Default.args = {};\n`;
};

exports.exportComponent = (name) => {
  return `export { default } from './${name}';
export * from './${name}';\n`;
};

exports.style = (name) => {
  return `import styled from 'styled-components';
      
type ${name}Props = {};
  
export const Styled${name} = styled.div<${name}Props>\`\`;\n`;
};

exports.exportStyle = (name) => {
  return `export * from './${name}.style';\n`;
};
