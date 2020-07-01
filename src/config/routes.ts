import { lazy } from 'react'
import {func} from "prop-types";

const ContextPath = '/src/pages/demo-component/Context'

export interface ItemType {
    key?: string;
    title?: string;
    type: string;
    path: string;
    component: any;
}
export interface MenuType {
    key?: string;
    title: string,
    type: string,
    children?: ItemType[]
}

function isItem(pet: ItemType | MenuType): pet is ItemType {
    return (pet as ItemType).type === 'item';
}

export function isMenu(pet: ItemType | MenuType): pet is MenuType {
    return (pet as MenuType).type === 'submenu';
}

// @ts-ignore
export const menus = [
    {
        title: 'Welcome',
        type: 'item',
        path: '/demo-Welcome',
        component: lazy(() => import('../pages/Welcome/Welcome'))
    },
    {
        title: 'demo',
        type: 'submenu',
        children: [
            {
                title: 'provider',
                type: 'item',
                path: '/demo-provider',
                component: lazy(() => import('../pages/demo-component/Context'))
            },
            {
                title: 'refs',
                type: 'item',
                path: '/demo-refs',
                component: lazy(() => import('../pages/DemoRefs/DemoRefs'))
            },
            {
                title: 'fragments',
                type: 'item',
                path: '/demo-fragments',
                component: lazy(() => import('../pages/demo-component/DemoFragments'))
            },
            {
                title: 'portals',
                path: '/demo-portals',
                type: 'item',
                component: lazy(() => import('../pages/DemoPortals/DemoPortals'))
            },
            {
                title: 'hook',
                path: '/demo-hook',
                type: 'item',
                component: lazy(() => import('../pages/DemoHook/DemoHook'))
            }
        ]
    },
    {
        title: 'Redux',
        type: 'submenu',
        children: [
            {
                title: 'redux',
                path: '/demo-redux',
                type: 'item',
                component: lazy(() => import('../pages/DemoRedux/DemoRedux'))
            },
            {
                title: 'counter',
                path: '/demo-counter',
                type: 'item',
                component: lazy(() => import('../pages/DemoRedux/DemoCounter'))
            }
        ]
    },
    {
        title: 'Redux',
        type: 'submenu',
        children: [
            {
                title: 'mobx',
                path: '/demo-mobx',
                type: 'item',
                component: lazy(() => import('../pages/DemoMobx/DemoMobx'))
            },
            {
                title: 'computed',
                path: '/demo-computed',
                type: 'item',
                component: lazy(() => import('../pages/DemoMobx/Computed'))
            },
            {
                title: 'autorun',
                path: '/demo-autorun',
                type: 'item',
                component: lazy(() => import('../pages/DemoMobx/Autorun'))
            },
            {
                title: 'color',
                path: '/demo-color',
                type: 'item',
                component: lazy(() => import('../pages/DemoMobx/Color'))
            },
            {
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

function mixinItemKey(item: ItemType, index: number, idx: number) {
    return ({...item, key: `${index + 1}-${idx + 1}`})
}

function filter(menus: ItemType[] | MenuType[]): ItemType[] {
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

console.log(menus)

export const routes = filter(menus)

