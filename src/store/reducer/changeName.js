const changeName = (name='Yang', action = {}) => {
    if(action.type==='changeName'){
        return action.params.name
    }
    return name
};
export default changeName;
