export default function copyText(text: string) {
  navigator.clipboard.writeText(text).then(
    function () {
      alert("copied")
    },
    function (err) {
      alert(`copy failed: ${err}`)
    }
  )
}
