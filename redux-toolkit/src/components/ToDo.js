import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { actionCreators } from "../store";


const ToDo = ({text, onBtnClick, id}) => {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
      </Link>
        <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => {
      dispatch(actionCreators.deleteToDo(ownProps.id));
    },
  };
}

export default connect(null, mapDispatchToProps)(ToDo);