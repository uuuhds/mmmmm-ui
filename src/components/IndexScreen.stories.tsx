import { Provider } from "react-redux";
import { PureInboxScreen } from "./InboxScreen";
import { store } from "../lib/redux";

export default {
  component: PureInboxScreen,
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
  title: "InboxScreen",
};

const Template = (args: any) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({}) as any;
Error.args = {
  error: "Something",
};
