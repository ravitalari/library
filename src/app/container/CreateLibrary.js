import {connect} from "react-redux";
import CreateLibrary from "../components/CreateLibrary";
import * as ActionTypes from '../state/action-type';

export const mapStateToProps = (state) => {
    return {};
}

export const mapDispatchToProps = (dispatch) => ({
    CreateLibrary: function(library) {
        dispatch({type:ActionTypes.CREATE_LIBRARY,library});
    },
})
//create and retruns a container
export default connect(mapStateToProps, mapDispatchToProps) (CreateLibrary);