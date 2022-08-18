interface SubMenuItem {
  title: string;
}
export interface SubMenuProps {
  title: string;
  submenu: SubMenuItem[];
}

export const MenuItems: SubMenuProps[] = [
  {
    title: 'hahah',
    submenu: [
      {
        title: 'ngu',
      },
      {
        title: 'ngoc',
      },
    ],
  },
  {
    title: 'MU',
    submenu: [
      {
        title: 'ngu',
      },
      {
        title: 'ngoc',
      },
    ],
  },
];
