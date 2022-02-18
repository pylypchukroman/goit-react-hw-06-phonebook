// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import style from './Filter.module.css';
import { changeFilter } from '../redux/contacts/contactsActions';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);
  return (
    <>
      <h2 className={style.Title}>Find contacts by name</h2>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e))}
      />
    </>
  );
};

// const mapStateToProps = state => ({
//   value: state.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   changeFilter: e => dispatch(changeFilter(e.target.value)),
// });

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// };

export default Filter;
