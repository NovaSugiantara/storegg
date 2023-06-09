import { Meta } from '@storybook/react';
import Input, { InputProps } from '../../../../components/Atom/Input';

export default {
  title: 'Component/Atoms/Input',
  component: Input,
} as Meta;

const Template = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
