import PropTypes from 'prop-types';

const Card = ({ children, handleClick = null }) => (
  <div onClick={handleClick} className="card">
    {children}
  </div>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  handleClick: PropTypes.func,
};

Card.defaultProps = {
  className: '',
  handleClick: null,
};

export default Card;