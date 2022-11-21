export interface State {
  name: string
  date: string // unix
  time: string
  location: string
  // indoor: boolean
  attendeeCount: number
  internet: boolean
  planner: "dj" | string
  announcer: "dj" | string
  // MUSIC
  slowPlaylist: string
  dancePlaylist: string
  clientMix: number
  // slowMix: number
  // LIGHTS
  strobesOk: boolean
  lasersOk: boolean
  hazeOk: boolean
  // TIMELINE
  // slots: TimeSlot[]
}

export const stateKeys: (keyof State)[] = [
  "name",
  "date",
  "time",
  "location",
  // 'indoor',
  "attendeeCount",
  "internet",
  "planner",
  "announcer",
  "slowPlaylist",
  "dancePlaylist",
  "clientMix",
  // 'slowMix',
  "strobesOk",
  "lasersOk",
  "hazeOk",
] // 'slots']

// export const displayName: { [key in keyof State]: String } = {
//   date: "Date",
//   time: "Time",
//   location: "Location",
//   attendeeCount: "Attendee Count",
//   internet: "Internet",
//   planner: "Planner",
//   announcer: "Annoucer (MC)",
//   slowPlaylist: "Slow Playlist",
//   dancePlaylist: "Dance Playlist",
//   clientMix: "Client Mix",
//   strobesOk: "Strobe Light Ok?",
//   lasersOk: "Lasers Ok?",
//   hazeOk: "Haze Ok?",
// }

export interface TimeSlot {
  minutes: number
  title: string
  comment: string
  sub: string[]
}

function map<T, Out>(maybeT: T | undefined, f: (t: T) => string): string {
  if (maybeT === undefined) {
    return "UNDEFINED"
  } else {
    return f(maybeT)
  }
}
