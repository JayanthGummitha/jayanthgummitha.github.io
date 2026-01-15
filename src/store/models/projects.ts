import { createModel } from '@rematch/core'
import type { RootModel } from '../models'

type Project = {
  name: string
  url: string
  videoID: string
}

const initialState: Project[] = [
  {
    name: 'Bank of America',
    url: 'Bank-of-America',
    videoID: 'fbReel'
  },
  {
    name: 'Practo',
    url: 'Practo',
    videoID: 'aqReel'
  },
  {
    name: 'Flipkart',
    url: 'Flipkart',
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
