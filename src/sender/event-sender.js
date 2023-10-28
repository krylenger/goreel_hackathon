export const send = (type, payload) => {
    document.body.dispatchEvent(new CustomEvent(type, {"detail": payload}))
}

export const subscribe = (type, callback) => {
    if(callback instanceof Function) document.body.addEventListener(type, callback, false)
}

export const unSubscribe = (type, callback) => {
    if(callback instanceof Function) document.body.removeEventListener(type, callback, false)
}
