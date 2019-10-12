import React from "react"
const NoContent = ({isEmpty}) => {
    console.log(isEmpty)
  if (isEmpty) {
    return (<div>No content available</div>);
  }else{
    return (<></>);
  }
}

export default NoContent
