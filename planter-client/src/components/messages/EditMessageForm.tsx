import { css } from "@emotion/react";
import React, { useState } from "react";
import { resetButton } from "../../lib/styles/components/reset-button";
import palette from "../../lib/styles/constants/palette";
import { Message } from "../../service/message";

type EditMessageFormProps = {
  message: Message;
  onClose: any;
  onUpdate: any;
};

const EditMessageForm = ({
  message,
  onUpdate,
  onClose,
}: EditMessageFormProps) => {
  const [text, setText] = useState(message.text);

  const onSubmit = async (event) => {
    event.preventDefault();
    onUpdate(message.uid, text);
    onClose();
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form css={editMessageForm} onSubmit={onSubmit}>
      <input
        css={formInput}
        type="text"
        placeholder="Edit your message"
        value={text}
        required
        autoFocus
        onChange={onChange}
      />
      <div css={editMessageFormAction}>
        <button type="submit" css={formBtn} className="update">
          Update
        </button>
        <button
          type="button"
          css={formBtn}
          className="cancel"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

const editMessageForm = css`
  margin-bottom: 12px;
`;

const formInput = css`
  margin-bottom: 8px;
  width: 100%;
  height: 28px;
  font-size: 14px;
  border: 1px solid ${palette.gray[200]};
  border-radius: 4px;
  outline: none;
`;

const editMessageFormAction = css`
  margin-bottom: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const formBtn = css`
  ${resetButton};
  padding: 0 4px;
  height: 32px;
  background-color: ${palette.brandTheme.base};
  font-size: 14px;
  font-weight: 700;
  color: ${palette.white};
  border-radius: 4px;
  transition: background-color 300ms ease-in-out;

  &:hover:enabled {
    background-color: ${palette.brandTheme.dark};
  }

  &:first-of-type {
    margin-right: 8px;
  }
`;

export default EditMessageForm;
