export default function saveTextFile(filename: string, text: string) {
  var a = document.createElement("a")
  a.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  )
  a.setAttribute("download", filename)

  if (document.createEvent) {
    var event = document.createEvent("MouseEvents")
    event.initEvent("click", true, true)
    a.dispatchEvent(event)
  } else {
    a.click()
  }
}
