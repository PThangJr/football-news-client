import PropTypes from 'prop-types';
import React, { useState } from 'react';
import fallbackAvatar from '../../../../assets/img/fallback_avatar.png';
import TextareaField from '../../../Form/form-fields/TextareaField';
import LoadingDotCircle from '../../../Loading/LoadingDotCircle';
import './style.scss';

const CommentForm = (props) => {
  const { avatarUser, disabled } = props;
  // console.log(disabled);
  let [values, setValues] = useState('');
  const fallbackImage = (e) => {
    if (e) {
      e.target.src = fallbackAvatar;
    }
  };
  const handleGetValues = (values) => {
    setValues(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    values = values.replace(/\r?\n/g, '<br />');
    console.log(values);
    props.onHandleSubmit(values);
    setValues('');
  };

  return (
    <div className="comments-user">
      <img src={avatarUser || ''} onError={fallbackImage} alt="avatar" className="comments-avatar" />
      <form onSubmit={handleSubmit} action="" className="comments-form">
        <TextareaField
          placeholder="Mời bạn để lại bình luận..."
          name="comments"
          id=""
          maxLength="700"
          rows="5"
          max="20"
          className="comments-textarea"
          value={values}
          handleGetValues={handleGetValues}
          disabled={disabled}
        />

        <button disabled={disabled} className={'btn btn--green ' + (disabled ? 'btn--disabled' : '')}>
          {disabled && <LoadingDotCircle />}
          Thêm bình luận
        </button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  avatarUser: PropTypes.string,
  disabled: PropTypes.bool,
};

export default CommentForm;
