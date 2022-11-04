import dayjs from "dayjs"

export interface State {
  name: string
  date: number // unix
  time: number
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

// export const toString: {
//   [key in keyof State]?: (val: State[key]) => string
// } = {
//   date: (unix_s: number) => dayjs(unix_s * 1000).format("MMM, DD, YYYY"),
//   time: (unix_s: number) => dayjs(unix_s * 1000).format("HH:mm"),
//   attendeeCount: (normalized: number) =>
//     `${Math.round(normalized ** 2 * 1000)}`,
//   clientMix: (normalized: number) => `${Math.round(normalized * 100)}`,
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
