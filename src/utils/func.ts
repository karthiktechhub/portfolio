
import {lines, longlines} from './store'

export const randline = (): string => {
    const rand = Math.floor(Math.random() * lines.length) + 1
    return lines[rand]
}
export const randlongline = (): string => {
    const rand = Math.floor(Math.random() * longlines.length) + 1
    return longlines[rand]
}