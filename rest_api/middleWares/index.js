import fs from 'fs'

function logrequest(filename) {
    return(req,res,next)=>{
        console.log(filename,"added to log");
    }
}

module.exports={
    logrequest
}