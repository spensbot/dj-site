import strings from "./strings"

export default function openEmail(subject: string, body: string) {
  window.open(`mailto:${strings.email}?subject=${subject}&body=${body}`)
}
