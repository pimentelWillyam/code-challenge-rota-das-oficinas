import {isArabicNumber} from './isArabicNumber'

export const isArabic = (number: string) =>{
    for (let i=0;i<number.length;i++){
        if (!isArabicNumber(number[i])){
            return false
        }
    }
}