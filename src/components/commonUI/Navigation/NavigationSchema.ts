export interface INavigationItem {
  name: string;
  to: string;
  focused: boolean;
}

export type NavigationList = INavigationItem[];

export const NavigationSchema: NavigationList = [
  {
    name: "Random Player",
    to: "/random",
    focused: false,
  },
  {
    name: "Single Player",
    to: "/singleplayer",
    focused: false,
  },
  {
    name: "Multi Player",
    to: "/multiplayer",
    focused: false,
  },
  {
    name: "About Game",
    to: "/about",
    focused: false,
  },
  {
    name: "Options",
    to: "/settings",
    focused: false,
  },
  {
    name: "Exit",
    to: "/",
    focused: false,
  },
];
