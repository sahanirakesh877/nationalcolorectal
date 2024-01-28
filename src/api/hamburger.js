let hamState = false;

export const stateHamburger =()=>{
    return hamState
}
export const toggleHamburger = ()=>{
    hamState = !hamState
    return hamState
}

export const closeHamburger = ()=>{
    hamState = false
    return hamState
}
