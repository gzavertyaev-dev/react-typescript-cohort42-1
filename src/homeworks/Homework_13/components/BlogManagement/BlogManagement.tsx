import { useState, ChangeEvent, createContext, FormEvent } from "react";

import Button from "components/Button/Button";
import Card from "homeworks/Homework_13/components/Card/Card";

import { BlogManagementWrapper, TextArea } from "./styles";

export const BlogManagmentContext = createContext<string>("");

function BlogManagement() {
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onChangeTextAreaMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  const postMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(textAreaValue);
  };

  console.log(message);

  return (
    <BlogManagmentContext.Provider value={message}>
      <BlogManagementWrapper onSubmit={postMessage}>
        <TextArea
          name="message"
          value={textAreaValue}
          onChange={onChangeTextAreaMessage}
          placeholder="Enter message to post"
        />
        <Button name="Запостить" type="submit" />
        {!!message && <Card />}
      </BlogManagementWrapper>
    </BlogManagmentContext.Provider>
  );
}

export default BlogManagement;
