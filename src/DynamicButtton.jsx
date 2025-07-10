import React from "react";

function DynamicButton({label,isDisabled=false,onClick}){
    return(
        <>
        <button disabled={isDisabled} onClick={onClick}>
            {label}
        </button>
        </>
    )

}
export default DynamicButton;