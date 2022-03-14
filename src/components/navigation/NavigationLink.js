import React from "react";

export default function NavigationLink(props) {
  return <a href={props.url}>{props.name}</a>;
}
