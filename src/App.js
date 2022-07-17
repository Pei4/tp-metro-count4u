import React, { useState } from "react";
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Droppable from "./js/Droppable";
import { arrayMove, insertAtIndex, removeAtIndex } from "./js/array";

function App() {
  const [items, setItems] = useState(
    //{group1: ["1", "2", "3"]}
    ["1", "2", "3"]
    );
  const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates
  }));

  /*const handleDragOver = ({
    over,
    active
  }) => {
    const overId = over?.id;

    if (!overId) {
      return;
    }

    const activeContainer = active.data.current.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId;

    if (!overContainer) {
      return;
    }

    if (activeContainer !== overContainer) {
      setItems(items => {
        const activeIndex = active.data.current.sortable.index;
        const overIndex = over.data.current?.sortable.index || 0;
        return moveBetweenContainers(items, activeContainer, activeIndex, overContainer, overIndex, active.id);
      });
    }
  };*/

  const handleDragEnd = ({
    active,
    over
  }) => {
    if (!over) {
      return;
    }

    //if (active.id !== over.id) {
      //const activeContainer = active.data.current.sortable.containerId;
      //const overContainer = over.data.current?.sortable.containerId || over.id;
      const container = over.id; //test
      const activeIndex = active.data.current.sortable.index;
      const overIndex = over.data.current?.sortable.index || 0;
      setItems(items => {
        //let newItems;

        //if (activeContainer === overContainer) {
          /*newItems = { ...items,
            [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
          };*/
        /*} else {
          newItems = moveBetweenContainers(items, activeContainer, activeIndex, overContainer, overIndex, active.id);
        }*/
        //return newItems;
        return arrayMove(items, activeIndex, overIndex);
      });
    //}
  };

  /*const moveBetweenContainers = (items, activeContainer, activeIndex, overContainer, overIndex, item) => {
    return { ...items,
      [activeContainer]: removeAtIndex(items[activeContainer], activeIndex),
      [overContainer]: insertAtIndex(items[overContainer], overIndex, item)
    };
  };*/

  const containerStyle = {
    display: "flex"
  };
  return React.createElement(DndContext, {
    sensors: sensors,
    onDragEnd: handleDragEnd,
    //onDragOver: handleDragOver
  }, React.createElement("div", {
    style: containerStyle
  }, React.createElement(Droppable, {
    id: 1,
    items: items,
    key: 1
  })));
}

export default App;