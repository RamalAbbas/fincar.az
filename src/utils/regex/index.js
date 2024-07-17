export function isInvalid(value){
    const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;

    if(!regex.test(value)){
        return false
    }
    return true
}