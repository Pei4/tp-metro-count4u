//function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SortableItem = props => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id: props.id
  });
  const itemStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: 110,
    height: 30,
    display: "inline-block",
    alignItems: "center",
    paddingLeft: 5,
    border: "1px solid gray",
    borderRadius: 5,
    marginBottom: 5,
    userSelect: "none",
    cursor: "grab",
    boxSizing: "border-box"
  };
  return React.createElement("div", _extends({
    style: itemStyle,
    ref: setNodeRef
  }, attributes, listeners), "Item ", props.id);
};

export default SortableItem;