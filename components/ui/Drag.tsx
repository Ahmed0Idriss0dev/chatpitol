
import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

export function Draggable(props:any) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button className='w-full h-11 bg-neutral-800 text-white' ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}
