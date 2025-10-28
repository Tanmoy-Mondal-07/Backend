import fs from 'fs'

function logreqres(filename) {
    return(req,res,next)=>{
        console.log(filename,"added to log");
    }
}

module.exports={
    logreqres
}