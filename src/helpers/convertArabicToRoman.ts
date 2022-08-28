import {RomanNumber} from './RomanNumber'
import { baseNumbers } from './baseNumbers';

export const convertArabicToRoman = (arabicNumber: number) =>{
    let i: number;
    let romanNumber: RomanNumber;
    if (arabicNumber <= 0 || arabicNumber > 3999) {
        return '';
    } 
    else {
        i = 0;
        let toReturn: string = '';
        arabicNumber = Math.floor(arabicNumber);
        while (arabicNumber > 0) {
        romanNumber = baseNumbers[i];
        if (Math.floor(arabicNumber / romanNumber.num) === 0) {
            ++i;
        } else {
            toReturn = toReturn + romanNumber.str;
            arabicNumber -= romanNumber.num;
        }
        }
        return toReturn;
    }
}