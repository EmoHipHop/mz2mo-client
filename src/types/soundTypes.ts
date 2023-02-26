import React from "react"

export interface ControlPanelTypes {
    play: React.MouseEventHandler<HTMLButtonElement>,
    isPlaying: boolean
}