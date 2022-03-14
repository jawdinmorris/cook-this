import React from "react";
import NavigationLink from "./NavigationLink";

export default function NavigationMenu() {
  return (
    <div>
      <NavigationLink name="Home" url="#"/>
      <NavigationLink name="New" url="#"/>
      <NavigationLink name="Random" url="#" />
    </div>
  );
}
