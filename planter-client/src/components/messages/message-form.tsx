import React, { useState } from "react";
import { css } from "@emotion/react";
import { resetButton } from "../../lib/styles/components/reset-button";
import { MessageCRUD } from "../../service/message";
import palette from "../../lib/styles/constants/palette";

type MessageFormProps = {
  messageService: MessageCRUD;
  onCreated: (message: any) => void;
  onError: (error: string) => void;
};

const MessageForm = ({
  messageService,
  onCreated,
  onError,
}: MessageFormProps) => {
  const [msgValue, setMsgValue] = useState("");

  const submitValidat = (e: React.FormEvent) => {
    e.preventDefault();
    if (msgValue == null) {
      return;
    } else {
      messageService
        .postMessage(msgValue)
        .then((created) => {
          setMsgValue("");
          onCreated(created);
        })
        .catch(onError);
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMsgValue(e.target.value);
  };

  return (
    <form css={messageForm} onSubmit={submitValidat}>
      <div css={textareaWrapper}>
        <textarea
          id="msgInput"
          value={msgValue}
          onChange={onInputChange}
        ></textarea>
        {!msgValue && <label htmlFor="msgInput">What's happening?</label>}
      </div>

      <div css={buttonWrapper}>
        <button css={submitBtn} type="submit" disabled={!msgValue}>
          Plant
        </button>
      </div>
    </form>
  );
};

const textareaWrapper = css`
  position: relative;
  margin-bottom: 12px;
  padding: 12px 0;
  border-bottom: 1px solid ${palette.border};

  textaea,
  label {
    font-size: 15px;
  }

  textarea {
    width: 100%;
    height: 80px;
    color: ${palette.text.primary};
    border: none;
    resize: none;
    outline: none;
  }

  label {
    position: absolute;
    top: 12px;
    left: 4px;
    font-weight: 700;
    color: ${palette.text.secondary};
  }
`;

const messageForm = css`
  padding: 0 16px;
`;

const buttonWrapper = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const submitBtn = css`
  ${resetButton}
  height: 36px;
  padding: 0 16px;
  background-color: ${palette.brandTheme.base};
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
  color: ${palette.white};
  border-radius: 18px;
  transition: background-color 300ms ease-in-out, opacity 300ms ease-in-out;

  &:hover:enabled {
    background-color: ${palette.brandTheme.dark};
  }

  &:disabled {
    opacity: 0.4;
  }
`;

export default MessageForm;
