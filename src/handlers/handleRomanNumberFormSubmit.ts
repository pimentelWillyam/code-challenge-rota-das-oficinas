import {convertArabicToRoman} from '../helpers/convertArabicToRoman'
import {convertRomanToArabic} from '../helpers/convertRomanToArabic'

export const handleRomanNumberFormSubmit = (event: React.FormEvent<HTMLFormElement> ,conversionFormat: string, numberToBeConverted: string | null, setConvertedNumber: React.Dispatch<React.SetStateAction<string>>, setConversionDone: React.Dispatch<React.SetStateAction<boolean>> ) =>{
   event.preventDefault()
   if (conversionFormat == 'Arabic to roman' && numberToBeConverted != null){
      let conversionResult = convertArabicToRoman(parseInt(numberToBeConverted))
      if (conversionResult != ''){
         setConvertedNumber(conversionResult)
         setConversionDone(true)
      }
      else{
         alert('Invalid format')
      }
   }
   else if (conversionFormat == 'Roman to arabic' && numberToBeConverted != null){
      let conversionResult = convertRomanToArabic(numberToBeConverted).toString()
      if (conversionResult != ''){
         setConvertedNumber(conversionResult)
         setConversionDone(true)
      }
      else{
         alert('Invalid format')
      }
      
      

   }
}