import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './Filter.module.css';
import { changeFilter } from '../redux/contacts/contactsActions';

const Filter = ({ value, changeFilter }) => {
  return (
    <>
      <h2 className={style.Title}>Find contacts by name</h2>
      <input
        type="text"
        // name="filter"
        value={value}
        onChange={changeFilter}
      />
    </>
  );
};

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e => dispatch(changeFilter(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
