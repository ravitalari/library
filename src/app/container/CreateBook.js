import {connect} from "react-redux";
import CreateBook from "../components/CreateBook";
import * as actions from  "../state/actions";
import * as ActionTypes from '../state/action-type';

export const mapStateToProps = (state) => {
    return {};
}

export const mapDispatchToProps = (dispatch) => ({
    CreateBook: function(book) {
        dispatch(actions.CreateBook(book));
    },
})
//create and retruns a container
export default connect(mapStateToProps, mapDispatchToProps) (CreateBook);