export interface INavigationItem {
  name: string;
  to: string;
  focused: boolean;
  disabled: boolean;
}

export type NavigationList = INavigationItem[];

export const NavigationSchema: NavigationList = [
  {
    name: "Random Player",
    to: "/random",
    focused: false,
    disabled: false,
  },
  {
    name: "Single Player",
    to: "/singleplayer",
    focused: false,
    disabled: true,
  },
  {
    name: "Multi Player",
    to: "/multiplayer",
    focused: false,
    disabled: true,
  },
  {
    name: "About Game",
    to: "/about",
    focused: false,
    disabled: false,
  },
  {
    name: "Options",
    to: "/settings",
    focused: false,
    disabled: false,
  },
  {
    name: "Exit",
    to: "/",
    focused: false,
    disabled: false,
  },
];
