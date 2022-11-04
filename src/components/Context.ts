import * as React from "react"
import { Modal_t } from "../components/Modal"

export const ModalContext = React.createContext<Modal_t | null>(null)
export const SetModalContext = React.createContext<(m: Modal_t | null) => void>(
  (newModal: Modal_t | null) => {}
)
