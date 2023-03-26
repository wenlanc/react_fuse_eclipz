import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'status',
    icon: 'simple-icon-check', // simple-icon-speedometer, simple-icon-check
    label: 'menu.status',
    to: `${adminRoot}/status`,
  },

  // {
  //   id: 'secondmenu',
  //   icon: 'iconsminds-three-arrow-fork',
  //   label: 'menu.apps',
  //   to: `${adminRoot}/second-menu`,
  //   // roles: [UserRole.Admin, UserRole.Editor],
  //   // subs: [
  //   //   {
  //   //     icon: 'simple-icon-paper-plane',
  //   //     label: 'menu.second',
  //   //     to: `${adminRoot}/second-menu/second`,
  //   //   },
  //   // ],
  // },

  // {
  //   id: 'apps',
  //   icon: 'simple-icon-grid',
  //   label: 'menu.apps',
  //   to: `${adminRoot}/apps`,
  // },
  // {
  //   id: 'peers',
  //   icon: 'simple-icon-organization', // simple-icon-share, simple-icon-organization
  //   label: 'menu.peers',
  //   to: `${adminRoot}/peers`,
  // },

  {
    id: 'protection',
    icon: 'simple-icon-lock',
    label: 'menu.protection',
    to: `${adminRoot}/protection`,
  },
  {
    id: 'privacy',
    icon: 'iconsminds-finger-print', // simple-icon-share, simple-icon-organization
    label: 'menu.privacy',
    to: `${adminRoot}/privacy`,
  },
  {
    id: 'about',
    icon: 'simple-icon-info',
    label: 'menu.about',
    to: `${adminRoot}/about`,
  },
];
export default data;
