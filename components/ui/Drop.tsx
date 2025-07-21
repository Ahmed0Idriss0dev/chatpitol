'use client'
import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div  className='w-96 h-96 p-2 border border-neutral-200 rounded-2xl' ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
  