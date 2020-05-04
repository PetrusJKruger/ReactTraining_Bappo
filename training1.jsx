import React from "react";
import { Text } from "bappo-components";
import Answer from "answer";

export default function Greet(props) {
  // Testing Purposes
  var i = 1;
  var user = props.userName;
  var greetingClass = "greeting";
  var bodyClass = "body";

  // Greeting
  var greeting = (
    // Wrapping components
    <div>
      <h1 className={greetingClass}>
        Hello{i == 1 ? " " + user : ""}, welcome!
      </h1>
      <h2>It is now {new Date().toLocaleTimeString()}. </h2>
      <text className={bodyClass}>What have you been up to? </text>
      <h1>
        " <Answer /> "
      </h1>
    </div>
  );
  return greeting;
}
