import { lazy } from 'react'

export interface ItemType {
    id: string
    parent?: string
    key?: string
    title?: string
    type: string
    path: string
    component: any
}
export interface MenuType {
    id: string
    parent?: string
    key?: string
    title: string
    type: string
    children?: ItemType[]
}

export function isItem(pet: ItemType | MenuType): pet is ItemType {
    return (pet as ItemType).type === 'item'
}

export function isMenu(pet: ItemType | MenuType): pet is MenuType {
    return (pet as MenuType).type === 'submenu'
}

// @ts-ignore
const menus = [
    /*{
        id: 'xxxsxsxxx',
        type: 'item',
        title: 'login',
        path: '/login',
        component: lazy(() => import('../pages/Login/Login'))
    },*/
    {
        id: 'xxxxxxxindex',
        title: 'index',
        type: 'item',
        path: '/index',
        component: lazy(() => import('../pages/Index/Index'))
    },
    {
        id: 'xxxxxxx',
        title: 'Welcome',
        type: 'item',
        path: '/demo-Welcome',
        component: lazy(() => import('../pages/Welcome/Welcome'))
    },
    {
        id: 'xxxxxxx',
        title: 'demo',
        type: 'submenu',
        children: [
            {
                id: 'xxxxxxx',
                title: 'provider',
                type: 'item',
                path: '/demo-provider',
                component: lazy(() => import('../pages/demo-component/Context'))
            },
            {
                id: 'xxxxxxx',
                title: 'refs',
                type: 'item',
                path: '/demo-refs',
                component: lazy(() => import('../pages/DemoRefs/DemoRefs'))
            },
            {
                id: 'xxxxxxx',
                title: 'HOC',
                type: 'item',
                path: '/demo-hoc-width-auto',
                component: lazy(() => import('../pages/DemoHOC/WidthAuth'))
            },
            {
                id: 'xxxxxxx',
                title: 'refs',
                type: 'item',
                path: '/demo-hoc',
                component: lazy(() => import('../pages/DemoRefs/HOC'))
            },
            {
                id: 'xxxxxxx',
                title: 'fragments',
                type: 'item',
                path: '/demo-fragments',
                component: lazy(() => import('../pages/demo-component/DemoFragments'))
            },
            {
                id: 'xxxxxxx',
                title: 'portals',
                path: '/demo-portals',
                type: 'item',
                component: lazy(() => import('../pages/DemoPortals/DemoPortals'))
            },
            {
                id: 'xxxxxxx',
                title: 'hook',
                path: '/demo-hook',
                type: 'item',
                component: lazy(() => import('../pages/DemoHook/DemoHook'))
            }
        ]
    },
    {
        id: 'xxxxxxx',
        title: 'Redux',
        type: 'submenu',
        children: [
            {
                id: 'xxxxxxx',
                title: 'redux',
                path: '/demo-redux',
                type: 'item',
                component: lazy(() => import('../pages/DemoRedux/DemoRedux'))
            },
            {
                id: 'xxxxxxx',
                title: 'counter',
                path: '/demo-counter',
                type: 'item',
                component: lazy(() => import('../pages/DemoRedux/DemoCounter'))
            }
        ]
    },
    {
        id: 'xxxxxxx',
        title: 'Redux',
        type: 'submenu',
        children: [
            {
                id: 'xxxxxxx',
                title: 'mobx',
                path: '/demo-mobx',
                type: 'item',
                component: lazy(() => import('../pages/DemoMobx/DemoMobx'))
            },
            {
                id: 'xxxxxxx',
                title: 'computed',
                path: '/demo-computed',
                type: 'item',
                component: lazy(() => import('../pages/DemoMobx/Computed'))
            },
            {
                id: 'xxxxxxx',
                title: 'autorun',
                path: '/demo-autorun',
                type: 'item',
                component: lazy(() => import('../pages/DemoMobx/Autorun'))
            },
            {
                id: 'xxxxxxx',
                title: 'color',
                path: '/demo-color',
                type: 'item',
                component: lazy(() => import('../pages/DemoMobx/Color'))
            },
            {
                id: 'xxxxxxx',
                title: 'action',
                path: '/demo-action',
                type: 'item',
                component: lazy(() => import('../pages/DemoMobx/Action'))
            },
        ]
    }
].map((item, index) => {
    return ({
        ...item,
        key: String(index + 1),
        children: item.children && (item.children as Array<any>).map<any>(
            (_itm: any, idx: any) => ({..._itm, key: `${index + 1}-${idx + 1}`})
        )
    })
})

export function filter(menus: ItemType[] | MenuType[]): ItemType[] {
    const _menus: ItemType[] = []

    if (menus && menus.length) {
        menus.forEach((item: ItemType | MenuType | any) => {
            if(isItem(item)) {
                _menus.push(item)
            } else {
                if (isMenu(item) && item.children) {
                    filter(item.children).map(item => _menus.push(item))
                }
            }
        })
    } else {
        console.log('routes is undefined')
    }

    return _menus
}

export const routesConfig = filter(menus)

