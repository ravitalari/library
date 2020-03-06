import {connect} from "react-redux";
import ListLibrary from "../components/ListLibrary";
import * as ActionTypes from '../state/action-type';


export const mapStateToProps = (state) => {
    return {
        libraries: state.libraryReducer.libraries
    }
}

export const mapDispatchToProps = (dispatch) => ({
    ListLibrary: function() {
        dispatch({type:ActionTypes.LIST_LIBRARY});
    }
})
//create and retruns a container
export default connect(mapStateToProps, mapDispatchToProps) (ListLibrary);