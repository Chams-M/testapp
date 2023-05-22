import React, { useState } from "react";
import { useSlate } from "slate-react";
import Button from "../common/Button";
import Icon from "../common/Icon";
import {
  toggleBlock,
  toggleMark,
  isMarkActive,
  addMarkData,
  isBlockActive,
  activeMark,
} from "../utils/SlateUtilityFunctions";
import useFormat from "../utils/customHooks/useFormat.js";
import defaultToolbarGroups from "./toolbarGroups.js";
import "./styles.css";
import ColorPicker from "../Elements/Color Picker/ColorPicker";
import LinkButton from "../Elements/Link/LinkButton";
import Embed from "../Elements/Embed/Embed";
import Id from "../Elements/ID/Id";

const Toolbar = (props) => {
  const editor = useSlate();
  const [toolbarGroups, setToolbarGroups] = useState(defaultToolbarGroups);

  const BlockButton = ({ format }) => {
    return (
      <Button
        id="email-toolbar-btn"
        active={isBlockActive(editor, format)}
        format={format}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlock(editor, format);
        }}
      >
        <Icon icon={format} />
      </Button>
    );
  };
  const MarkButton = ({ format }) => {
    return (
      <Button
        id="email-toolbar-btn"
        active={isMarkActive(editor, format)}
        format={format}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleMark(editor, format);
        }}
      >
        <Icon icon={format} />
      </Button>
    );
  };
  const Dropdown = ({ format, options }) => {
    return (
      <select
        id="email-toolbar-btn"
        value={activeMark(editor, format)}
        onChange={(e) => changeMarkData(e, format)}
      >
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    );
  };
  const changeMarkData = (event, format) => {
    event.preventDefault();
    const value = event.target.value;
    addMarkData(editor, { format, value });
  };
  return (
    <div className="toolbar">
      {toolbarGroups.map((group, index) => (
        <span key={index} className="toolbar-grp">
          {group.map((element) => {
            switch (element.type) {
              case "block":
                return <BlockButton key={element.id} {...element} />;
              case "mark":
                return <MarkButton key={element.id} {...element} />;
              case "link":
                return (
                  <LinkButton
                    key={element.id}
                    active={isBlockActive(editor, "link")}
                    editor={editor}
                  />
                );
              case "embed":
                return (
                  <Embed
                    key={element.id}
                    format={element.format}
                    editor={editor}
                  />
                );
              case "color-picker":
                return (
                  <ColorPicker
                    key={element.id}
                    activeMark={activeMark}
                    format={element.format}
                    editor={editor}
                  />
                );
              case "id":
                return <Id editor={editor} />;

              default:
                return null;
            }
          })}
        </span>
      ))}
    </div>
  );
};

export default Toolbar;
