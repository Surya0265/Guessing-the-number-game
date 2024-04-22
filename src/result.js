import React from "react";

function Result({secretnumber,term}){
     
    let result;

    if(term){
        if(term>secretnumber){
            result='Higher'
        }
        else if(term<secretnumber){
            result='Lower'
        }
        else if(term==secretnumber){
            result='Yipee!the right one'
        }
        else{
            result="invalid input"
        }
    }
    return <h3>You Guessed:{result}</h3>

}
    

export default Result