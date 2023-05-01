// function value null
const searchName = (value : string | null) => {
    if(value === null){
        console.log("Nothing");
    } else {
        console.log("searching...");
    }
}
searchName(null)


// function value Unknown
const getMyCarSpeed = (speed: unknown) => {
    if(typeof speed === "number"){
        const convertedSpeed = (speed * 1000) / 3600
        console.log(`My Speed is ${convertedSpeed}`);
    }
    if(typeof speed === "string"){
        const [value, unit] = speed.split(" ")
        const convertedSpeed = (parseFloat(value) * 1000) / 3600
        console.log(`My Speed is ${convertedSpeed}`);
    }
}
getMyCarSpeed("234 monirul Islam")


// function value Never
function throwError(message: string): never{
    throw new Error(message)
}

throwError("Something went wrong")