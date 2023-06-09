import { Meta } from "@storybook/react";
import FeaturedGame, {
  GameItemProps,
} from "../../../../components/Molecules/FeaturedGame";

export default {
  title: "Component/Molecules/featureGame",
  component: FeaturedGame,
} as Meta;

const Template = (args: GameItemProps) => <FeaturedGame {...args} />;

export const Default = Template.bind({});
