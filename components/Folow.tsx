'use client'
import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import { Draggable } from './ui/Drag';
import { Droppable } from './ui/Drop';

export function Folow() {
  const [parent, setParent] = useState(null);
  const draggable = (
    <Draggable id="draggable">
      Google ads
    </Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!parent ? draggable : null}
      <Droppable id="droppable">
        {parent === "droppable" ? draggable : 'Drop here'}
      </Droppable>
    </DndContext>
  );

  function handleDragEnd({over}) {
    setParent(over ? over.id : null);
  }
}
  