import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");
const { height } = Dimensions.get("window");

export const SCREEN_HEIGHT = height;
export const SCREEN_WEIDTH = width;
export const FORM_WIDTH = width - 100;
export const CARD_WIDTH = width - 30;
