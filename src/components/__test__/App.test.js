import React from "react";
// import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

test("shows a comment box", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
  expect(wrapped.find(CommentList).length).toEqual(1);
});

test("should ", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});
