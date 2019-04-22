/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { Button } from "../Button";
import { Tooltip } from "../Tooltip";
import { storiesOf } from "@storybook/react";
import { Touchable } from "../Touchable";

export const TouchableStories = storiesOf("Touchable", module).add(
  "basic",
  () => {
    return (
      <div css={{ padding: "100px", height: "200px", overflowY: "scroll" }}>
        <Touchable>Hello world</Touchable>
        <p>
          Aute Lorem laboris nostrud culpa eiusmod in ipsum laborum. Minim
          cupidatat dolore tempor elit irure officia qui. Anim ea dolor
          excepteur eiusmod incididunt consectetur reprehenderit id. Incididunt
          tempor reprehenderit laboris eu exercitation voluptate proident
          nostrud eiusmod. Laborum consectetur culpa Lorem exercitation ut
          occaecat est proident labore ullamco id mollit. Labore reprehenderit
          commodo cupidatat mollit nostrud velit. Exercitation veniam consequat
          commodo aute incididunt anim duis incididunt sint officia veniam.
          Aliqua tempor ullamco in occaecat ullamco est ea aliqua exercitation
          amet cillum reprehenderit. Deserunt pariatur duis id dolore ut enim
          irure enim consectetur amet anim enim et. Elit Lorem veniam sit non
          magna esse.
        </p>
      </div>
    );
  }
);