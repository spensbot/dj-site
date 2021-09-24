export interface State {
  date?: number // unix
  location?: string
  indoor?: boolean
  attendeeCount?: number
  internet?: boolean
  planner?: 'dj' | string
  announcer?: 'dj' | string
  // MUSIC
  slowPlaylist?: string
  dancePlaylist?: string
  clientMix?: number
  slowMix?: number
  // LIGHTS
  strobesOk?: boolean
  lasersOk?: boolean
  hazeOk?: boolean
  // TIMELINE
  time?: number
  // slots?: TimeSlot[]
}

export const stateKeys: (keyof State)[] = [
  'date',
  'location',
  'indoor',
  'attendeeCount',
  'internet',
  'planner',
  'announcer',
  'slowPlaylist',
  'dancePlaylist',
  'clientMix',
  'slowMix',
  'strobesOk',
  'lasersOk',
  'hazeOk',
  'time',
] // 'slots']

export interface TimeSlot {
  minutes: number
  title: string
  comment: string
  sub: string[]
}
