export function addCount() {
    return {
        type:'add'
    }
}
export function subtractCount() {
    return {
        type:'subtract'
    }
}
export function changeName(name) {
    return {
        type:'changeName',
        params:{
            name:name
        }
    }
}
