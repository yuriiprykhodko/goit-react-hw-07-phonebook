import { useSelector, useDispatch } from "react-redux";

import "./Filter.css";
import { contactsActions, contactsSelection } from "redux/contacts";

const Filter = () => {
  const value = useSelector(contactsSelection.getFilterReducer);
  const dispatch = useDispatch();
  const onChange = (e) =>
    dispatch(contactsActions.updateFilterAction(e.target.value));
  return (
    <label className="label">
      Find contacts by name
      <input className="input" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
