import React, { useRef, useState } from "react";
import { css } from "@emotion/react";
import { resetButton } from "../../lib/styles/components/reset-button";
import { Message } from "../../service/message";
import palette from "../../lib/styles/constants/palette";

type MessageFormProps = {
  onCreated: (message: Message) => void;
};

const MessageForm = ({ onCreated }: MessageFormProps) => {
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [writed, setWrited] = useState<boolean>(false);

  const submitValidat = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageRef.current?.value !== null) {
      onCreated({
        uid: 3,
        createdAt: Date.now().toString(),
        text: messageRef.current?.value! as string,
        user: {
          name: "ellie",
          nickname: "ellie",
        },
      });
    }
  };

  const onInputChange = (): void => {
    messageRef.current?.value === "" ? setWrited(false) : setWrited(true);
  };

  return (
    <form css={messageForm} onSubmit={submitValidat}>
      <div css={textareaWrapper}>
        <textarea
          ref={messageRef}
          id="msgInput"
          onChange={onInputChange}
        ></textarea>
        {!writed && <label htmlFor="msgInput">What's happening?</label>}
      </div>

      <div css={buttonWrapper}>
        <button css={submitBtn} type="submit" disabled={!writed}>
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
  border-radius: 18px;
  background-color: ${palette.brandTheme.base};
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
  color: ${palette.white};

  &:hover:enabled {
    background-color: ${palette.brandTheme.dark};
  }

  &:disabled {
    opacity: 0.4;
  }
`;

export default MessageForm;
