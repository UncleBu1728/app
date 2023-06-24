import { Icon } from '@chakra-ui/react'
import {
  MdPerson,
  MdHome,
  MdAccountBox
} from 'react-icons/md'

import { IRoute } from 'horizon-ui/types/navigation'

const routes: IRoute[] = [
  {
    name: '会议列表',
    layout: '/',
    path: '/',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    resource: 'my-groups:read',
  },
  {
    name: '个人信息',
    layout: '/',
    path: '/profile',
    icon: <Icon as={MdAccountBox} width='20px' height='20px' color='inherit' />,
    resource: 'me:write',
    hiddenFromSidebar: true,
  },
  {
    name: '会议详情',
    layout: '/',
    path: '/groups/[id]',
    icon: <Icon as={MdAccountBox} width='20px' height='20px' color='inherit' />,
    resource: 'me:write',
    hiddenFromSidebar: true,
  },
  {
    name: '用户管理',
    layout: '/',
    path: '/users',
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    resource: 'users:write',
  },
  {
    name: '分组管理',
    layout: '/',
    path: '/groups',
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    resource: 'groups:write',
  },
]

export default routes
