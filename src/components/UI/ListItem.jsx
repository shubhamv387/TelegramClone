import PropTypes from 'prop-types';

const ListItem = (props) => {
  const Icon = props.icon;

  return (
    <button className='px-6 py-2 w-full flex items-center justify-start gap-4 hover:bg-chat-hover'>
      <Icon size={20} />
      <span>{props.text}</span>
    </button>
  );
};

ListItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};

export default ListItem;
