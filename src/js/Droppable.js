import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableItem from "./Sortable";
import React from "react";

const Droppable = ({
  id,
  items
}) => {
  const {
    setNodeRef
  } = useDroppable({
    id
  });
  const droppableStyle = {
    padding: "20px 10px",
    border: "1px solid black",
    borderRadius: "5px",
    width: "500px"
  };
  return React.createElement(SortableContext, {
    id: id,
    items: items,
    strategy: rectSortingStrategy
  }, React.createElement("div", {
    ref: setNodeRef,
    style: droppableStyle
  }, items.map(item => React.createElement(SortableItem, {
    key: item,
    id: item
  }))));
};

export default Droppable;