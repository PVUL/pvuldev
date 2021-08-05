import { proxy } from 'valtio'

type GlobalStateType = {
  current: 'laces' | 'mesh' | 'caps' | 'inner' | 'sole' | 'stripes' | 'band' | 'patch'
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

export const GlobalState = proxy<GlobalStateType>({
  current: 'laces',
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
})
