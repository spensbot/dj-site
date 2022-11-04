import copyText from "./copyText"
import openEmail from "./openEmail"
import saveTextFile from "./saveTextFile"

export default class DocMaker {
  private data = ""

  p(line: string) {
    this.data += line
    this.data += "\n"
  }

  br() {
    this.data += "\n"
  }

  download_as(filename: string) {
    saveTextFile(filename + ".txt", this.data)
  }

  email(subject: string) {
    openEmail(subject, this.data)
  }

  copy() {
    copyText(this.data)
  }
}
