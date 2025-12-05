import { createModel } from '@rematch/core'
import type { RootModel } from '../models'

type Project = {
  name: string
  url: string
  videoID: string
}

const initialState: Project[] = [
  {
    name: 'General Motors',
    url: 'general-motors',
    videoID: 'aqReel'
  },
  {
    name: 'Rexel',
    url: 'Rexel',
    videoID: 'aqReel'
  },
  {
    name: 'UJR Technologies',
    url: 'UJR',
    videoID: 'skReel'
  },
  // {
  //   name: 'Fastweb',
  //   url: 'fastweb',
  //   videoID: 'fbReel'
  // },
  // {
  //   name: 'Feudi',
  //   url: 'feudi',
  //   videoID: 'feudiReel'
  // },
  // {
  //   name: 'Claraluna',
  //   url: 'claraluna',
  //   videoID: 'claralunaReel'
  // }
]

export const projects = createModel<RootModel>()({
  state: initialState
})
