import { proxy } from 'valtio'

enum Item {
  laces,
  mesh,
  caps,
  inner,
  sole,
  stripes,
  band,
  patch,
}

type GlobalStateType = {
  current?: keyof typeof Item
  items: {
    laces: string
    mesh: string
    caps: string
    inner: string
    sole: string
    stripes: string
    band: string
    patch: string
  }
}

const initialState = {
  current: undefined,
  items: {
    laces: '#ffffff',
    mesh: '#ffffff',
    caps: '#ffffff',
    inner: '#ffffff',
    sole: '#ffffff',
    stripes: '#ffffff',
    band: '#ffffff',
    patch: '#ffffff',
  },
}

export const GlobalState = proxy<GlobalStateType>(initialState)
