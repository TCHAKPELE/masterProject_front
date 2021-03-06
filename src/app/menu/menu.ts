import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: '/home'
  },
  {
    id: 'heroes',
    title: 'Heroes',
    translate: 'MENU.HEROES',
    type: 'item',
    icon: 'file',
    url: '/heroes'
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    translate: 'MENU.DASHBOARD',
    type: 'item',
    icon: 'file',
    url: '/dashboard'
  }
]
