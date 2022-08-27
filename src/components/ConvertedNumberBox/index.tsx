import './style.css'


export const ConvertedNumberBox = (props: any) =>{

    if (props.conversionDone == true && props.numberToBeConverted != null && props.convertedNumber != null && props.conversionType != 'Arabic to roman' ){
        return(
            <p>{props.numberToBeConverted} converted to roman is {props.convertedNumber}</p>
        )
    }
    else if (props.conversionDone == true && props.numberToBeConverted != null && props.convertedNumber != null && props.conversionType != 'Roman to arabic' ){
        return(
            <p>${props.numberToBeConverted} converted to roman is ${props.convertedNumber}</p>
        )
    }
    else{
        return null
    }
}