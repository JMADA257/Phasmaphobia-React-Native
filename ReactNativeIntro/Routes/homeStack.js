import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import Gadgets from "../screens/Gadgets";
import Ghosts from "../screens/Ghosts";
import Maps from "../screens/Maps";
import Unlockables from "../screens/Unlockables";

const screens = {
  Home: {
    screen: Home,
  },
  Contact: {
    screen: Contact,
  },
  Gadgets: {
    screen: Gadgets,
  },
  Ghosts: {
    screen: Ghosts,
  },
  Maps: {
    screen: Maps,
  },
  Unlockables: {
    screen: Unlockables,
  },
};

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);
