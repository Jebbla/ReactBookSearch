import React from 'react';

function SaveBtn(props){
    // console.log(props)
    return(
        <button type="button" className="btn btn-success" {...props}>Save</button>
    )
}

export default SaveBtn; 