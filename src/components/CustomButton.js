import React  from 'react'
import {Button} from 'react-bootstrap'


const STYLES = ['primary', 'outline-primary'];
const SIZES = ['lg', 'sm'];
export const CustomButton = ({ 
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    href,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    
    return(
        <Button
        className={`btn  ${checkButtonSize} ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
        buttonStyle={buttonStyle}
        href={href}
        >{children}</Button>
        )
    };



export default CustomButton;