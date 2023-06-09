import { Meta } from '@storybook/react';
import StepTransaction, {
  StepItemProps,
} from '../../../../components/Molecules/StepTransaction';

export default {
  title: 'Component/Molecules/StepTransaction',
  component: StepTransaction,
} as Meta;

const Template = (args: StepItemProps) => <StepTransaction {...args} />;

export const Default = Template.bind({});
