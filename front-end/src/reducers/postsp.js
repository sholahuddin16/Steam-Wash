import { CREATE, UPDATE, DELETE, FETCH_ALL } from "../constants/actionTypes";

export default (postsp = [], actions) => {
    switch (actions.type){
        case FETCH_ALL:
            return actions.payload;
        case CREATE:
            return [...postsp, actions.payload];
        case UPDATE:
            return postsp.map((postp) => postp._id === actions.payload._id ? actions.payload : postp );
        case DELETE:
            return postsp.filter((postp)=> postp._id !== actions.payload);
        default:
            return postsp;
    }
}