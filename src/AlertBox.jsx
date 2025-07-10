import React from "react";

function AlertBox({message, type}){
    const styles={
        success:{
           backgroundColor: '#d4efda',
           color:'#111111',
           padding: '1rem',
           margin:'1 rem 2 rem',
           borderRadius: '5px',
           
         
           


        },
        error:{
            backgroundColor:'#991111',
            color: '#ffffff',
            padding: '1rem',
           margin:'1 rem 2 rem',
           borderRadius: '5px',

        }
    };
    const alertStyle = styles[type];
    return(
        <div style={alertStyle}>
            {message}
        </div>

    )

}
export default AlertBox;



// import React from 'react';

// function AlertBox({ message, type }) {
//   const styles = {
//     success: {
//       backgroundColor: '#d4edda',
//       color: '#155724',
//       border: '1px solid #c3e6cb',
//       padding: '1rem',
//       borderRadius: '5px',
//       margin: '1rem 0',
//     },
//     warning: {
//       backgroundColor: '#fff3cd',
//       color: '#856404',
//       border: '1px solid #ffeeba',
//       padding: '1rem',
//       borderRadius: '5px',
//       margin: '1rem 0',
//     },
//     error: {
//       backgroundColor: '#f8d7da',
//       color: '#721c24',
//       border: '1px solid rgb(236, 16, 38)',
//       padding: '1rem',
//       borderRadius: '5px',
//       margin: '1rem 0',
//     },
//   };

//   // Default to 'warning' if unknown type is provided
//   const alertStyle = styles[type] || styles.warning;

//   return (
//     <div style={alertStyle}>
//       {message}
//     </div>
//   );
// }

// export default AlertBox;