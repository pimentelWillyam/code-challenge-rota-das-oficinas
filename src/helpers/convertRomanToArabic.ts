import { baseNumbers } from './baseNumbers'
import {isRoman} from './isRoman'

export const convertRomanToArabic = (romanNumber: string) =>{
    let romanNumeral = romanNumber.toUpperCase()
    if (!isRoman(romanNumeral)) {
        return ''
    }
    let result = 0
    let i = 0
    while (romanNumeral.length > 0 && i < baseNumbers.length) {
        const romanNumber = baseNumbers[i]
        if (romanNumeral.startsWith(romanNumber.str)) {
            result += romanNumber.num
            romanNumeral = romanNumeral.substring(romanNumber.str.length)
        } else {
            i++
        }
    }
    return result
}