import React, { useState, useRef } from "react";
import { Form, FormControl, FormGroup, IconButton, Schema } from "rsuite";
import { FiSend } from "react-icons/all";

export function ChatFooter({ isReadOnly, onSend }) {
  const form = useRef();
  const [message, setMessage] = useState();
  const model = Schema.Model({
    message: Schema.Types.StringType().isRequired(
      "Текст сообщения обязателен для заполнения"
    ),
  });
  function handleOnSend() {
    if (form.current.check()) {
      onSend(message);
      setMessage("");
    }
  }
  return isReadOnly ? (
    ""
  ) : (
    <div className="chat__message">
      <Form
        fluid
        className="chat__message-form"
        onSubmit={handleOnSend}
        model={model}
        ref={form}
      >
        <FormGroup className="chat__input-area">
          <FormControl
            rows={4}
            name="message"
            componentClass="textarea"
            value={message}
            onChange={(value) => setMessage(value)}
          />
        </FormGroup>
        <IconButton
          className="chat__send"
          icon={<FiSend icon="linkedin" />}
          circle
          size="lg"
          type="submit"
        />
      </Form>
    </div>
  );
}
