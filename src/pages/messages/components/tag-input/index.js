import React, { useRef, useState } from "react";
import { Button, Input, Tag, TagGroup } from "rsuite";
import "./styles.css";

export function TagInput({ ticket, onSubmit }) {
  const input = useRef();
  const [tags, setTags] = useState(ticket.tags || []);
  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleRemoveTag(tag) {
    setTags(tags.filter((item) => item !== tag));
  }

  function handleButtonClick() {
    setTyping(true);
    input.current && input.current.focus();
  }

  function handleInputConfirm() {
    setTags(inputValue ? [...tags, inputValue] : tags);
    setTyping(false);
    setInputValue("");
  }

  function renderInput() {
    if (typing) {
      return (
        <Input
          ref={input}
          className="tag-input"
          size="xs"
          style={{ width: 70 }}
          value={inputValue}
          onChange={(val) => setInputValue(val)}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      );
    }
    return (
      <Button
        className="tag-add"
        onClick={handleButtonClick}
        appearance="ghost"
        size="xs"
      >
        Добавить
      </Button>
    );
  }

  return (
    <div className="tag-group">
      <TagGroup>
        {tags.map((item, index) => (
          <Tag
            key={index}
            closable
            onClose={() => {
              handleRemoveTag(item);
            }}
          >
            {item}
          </Tag>
        ))}
        {renderInput()}
      </TagGroup>
      <div className="save-tags">
        <Button appearance="primary" onClick={() => onSubmit(tags)}>
          Сохранить
        </Button>
      </div>
    </div>
  );
}
