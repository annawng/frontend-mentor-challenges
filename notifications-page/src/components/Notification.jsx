import PropTypes from 'prop-types';

const Notification = ({
  avatarPath,
  name,
  // text,
  // message,
  photoPath,
  photoAltText,
  // read,
}) => {
  return (
    <section>
      <img src={avatarPath} alt={name} />
      <div>
        <p>
          <span className='name'>{name}</span>
        </p>
      </div>
      {photoPath && <img src={photoPath} alt={photoAltText} />}
    </section>
  );
};

Notification.propTypes = {
  avatarPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  message: PropTypes.string,
  photoPath: PropTypes.string,
  photoAltText: PropTypes.string,
  read: PropTypes.bool,
};

export default Notification;
