const AWAIT_FLAG = '__fromPromisify__';

Function.prototype.wait = function () {

    if(this[AWAIT_FLAG]){
        throw new Error(`Function "${this.name}" do not resolve, please don't use "wait" before resolving`)
    }

    return new Promise((resolve, reject) => {
        this[AWAIT_FLAG] = {resolve, reject}
        Function.prototype.bind.apply(this, arguments)()
    })
}


Function.prototype.resolving = function (data) {
    if(!this[AWAIT_FLAG]) return;
    this[AWAIT_FLAG].resolve(data)
    delete this[AWAIT_FLAG]
}

Function.prototype.rejecting = function (err) {
    if(!this[AWAIT_FLAG]) return;
    this[AWAIT_FLAG].reject(err)
    delete this[AWAIT_FLAG]
}
