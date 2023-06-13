import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "2px solid #33B5FF",
        height: "100px",
        margin:'10px',
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:'#0093e8',
        backgroundColor:'#F8FEF4',
        boxShadow:'10px 5px 10px #999'
      }}
      className="square"
    >
      <h2 style={{fontWeight:'800'}}>{props.value}</h2>
    </div>
  );
};

export default Square;
