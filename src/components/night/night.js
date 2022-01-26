// import React, {useState} from "react";
import { BsX } from "react-icons/bs";
import checks from "../../images/iconcheck.svg";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  lodo: {
    border: "1px solid white",
    padding:".4rem",
    borderRadius:"50%"
  },
  delete: {
    // padding:".0rem",
    textAlign: 'center',
    background:"transparent",
    border:"none"
  },
  dices:{
    backgroundColor:"rgb(37,39,60)",
    width:"30%",
    marginRight:"7rem",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-Between",
    borderRadius:".2rem",
    borderBottom:"0.3px solid white",
    padding:".1rem",
    fontSize: 25,
    height: 40,
    outline: "none",
    marginBottom:"65px"
  },
  dive:{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:"-45px"
  }
}));
const List = ({ title, id }) => {
  const classes = useStyles();

  return (
    <div className={classes.dive}>
      <div></div>
      <div
     
     className={classes.dices}
   >
     <div >
       <img src={checks} alt="Logo"  className={classes.lodo}/>
     </div>
     <div>
       <p className={classes.textA}>{title}</p>
     </div>
     <div >
       <button className={classes.delete}>
         {" "}
         <BsX color="white" size="2em" />
       </button>
      </div>
   
       
      
   </div>
      <div></div>

    </div>
   
  );
};

export default List;
