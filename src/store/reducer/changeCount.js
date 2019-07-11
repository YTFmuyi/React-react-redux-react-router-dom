const changeCount = (count=0, action = {}) => {
    if(action.type==='add'){
        return count+1
    }
    if(action.type==='subtract'){
        return count-1
    }
    return count
};
export default changeCount;
