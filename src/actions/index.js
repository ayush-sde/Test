export const incNumber = () => {
    return{
        type: 'Increment'
        
    }
}

export const decNumber = () => {
    const delay = (ms) => new Promise(res => setTimeout(res, ms))
    console.log("wait 2");
    delay(2000)
    return{

        type: 'Decrement'
        
    }
}
export const incNumberAsync = () => {
    return{
        type: 'INCREMENT_ASYNC'
        
    }
}
