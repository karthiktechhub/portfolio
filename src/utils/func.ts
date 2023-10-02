
import {lines, longlines, midline, rectangle} from './store'

export const randline = (): string => {
    const rand = Math.floor(Math.random() * lines.length) + 1
    return lines[rand]
}

export const randlongline = (): string => {
    const rand = Math.floor(Math.random() * longlines.length) + 1
    return longlines[rand]
}

export const randMediumline = (): string => {
    const rand = Math.floor(Math.random() * midline.length) + 1
    return midline[rand]
}

export const randButtonBorder = (): string => {
    const rand = Math.floor(Math.random() * rectangle.length) + 1
    return rectangle[rand]
}
