import React, { useState, useRef } from "react";

export default function DragDrop() {
  const [containers, setContainers] = useState([
    ["item1", "item2", "item3"],
    [], // Container 2 - will show when dragging starts
    []  // Container 3 - will show when container 1 has 1 item left
  ]);

  const [dragging, setDragging] = useState({
    containerIndex: null,
    itemIndex: null
  });
    
  const [dragOver, setDragOver] = useState({
    containerIndex: null,
    itemIndex: null
  });

  const lastEnterRef = useRef(null);

  // Determine which containers should be visible
  const getVisibleContainers = () => {
    const visible = [0]; // Container 1 is always visible
    
    // Show container 2 when dragging starts OR if it has items
    if (dragging.containerIndex !== null || containers[1].length > 0) {
      visible.push(1);
    }
    
    // Show container 3 when container 1 has only 1 item left OR if it has items
    if (containers[0].length <= 1 || containers[2].length > 0) {
      visible.push(2);
    }
    
    return visible;
  };

  const handleDragStart = (containerIndex, itemIndex) => {
    setDragging({ containerIndex, itemIndex });
    setDragOver({ containerIndex: null, itemIndex: null });
    lastEnterRef.current = null;
  };

  const performDrop = (targetContainerIndex, targetItemIndex) => {
    const { containerIndex: dragContainer, itemIndex: dragItem } = dragging;

    if (dragContainer === null) return false;

    // Don't move if it's the same position
    if (dragContainer === targetContainerIndex && dragItem === targetItemIndex) {
      return false;
    }

    const newContainers = containers.map(container => [...container]);
    const draggedItem = newContainers[dragContainer][dragItem];

    // Remove from source
    newContainers[dragContainer].splice(dragItem, 1);

    // Calculate correct insert position
    let insertIndex = targetItemIndex;
    if (dragContainer === targetContainerIndex && dragItem < targetItemIndex) {
      insertIndex = targetItemIndex - 1;
    }

    // Insert into target
    newContainers[targetContainerIndex].splice(insertIndex, 0, draggedItem);

    setContainers(newContainers);
    return true;
  };

  const handleDrop = (e, containerIndex, itemIndex) => {
    e.preventDefault();
    performDrop(containerIndex, itemIndex);
    setDragging({ containerIndex: null, itemIndex: null });
    setDragOver({ containerIndex: null, itemIndex: null });
    lastEnterRef.current = null;
  };

  const handleDragEnd = () => {
    // If we have a valid drop target, perform the drop
    if (dragOver.containerIndex !== null && dragOver.itemIndex !== null) {
      performDrop(dragOver.containerIndex, dragOver.itemIndex);
    }
    
    setDragging({ containerIndex: null, itemIndex: null });
    setDragOver({ containerIndex: null, itemIndex: null });
    lastEnterRef.current = null;
  };

  const handleDragEnter = (containerIndex, itemIndex) => {
    // Prevent rapid firing by checking if this is the same target
    const enterKey = `${containerIndex}-${itemIndex}`;
    if (lastEnterRef.current === enterKey) return;
    lastEnterRef.current = enterKey;

    if (dragging.containerIndex === null) return;

    // Don't set drag over if it's the same as dragging item
    if (dragging.containerIndex === containerIndex && dragging.itemIndex === itemIndex) {
      return;
    }

    setDragOver({ containerIndex, itemIndex });
  };

  const handleDragLeave = () => {
    // Only clear if we're leaving the container area
    setDragOver({ containerIndex: null, itemIndex: null });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const visibleContainers = getVisibleContainers();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dynamic Drag and Drop Example</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {visibleContainers.map((containerIndex) => {
          const items = containers[containerIndex];
          return (
            <div
              key={containerIndex}
              onDragLeave={handleDragLeave}
              style={{
                width: "200px",
                padding: "10px",
                background: "#f0f0f0",
                borderRadius: "8px",
                minHeight: "150px"
              }}
            >
              <h4>Container {containerIndex + 1}</h4>
              {items.length === 0 && (
                <div
                  onDragEnter={() => handleDragEnter(containerIndex, 0)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, containerIndex, 0)}
                  style={{
                    padding: "10px",
                    margin: "10px 0",
                    backgroundColor: dragOver.containerIndex === containerIndex && dragOver.itemIndex === 0 
                      ? "#d4edda" 
                      : "#e8e8e8",
                    border: "2px dashed #ccc",
                    borderRadius: "4px",
                    textAlign: "center",
                    color: "#999",
                    transition: "background-color 0.2s"
                  }}
                >
                  Drop items here
                </div>
              )}
              {items.map((item, itemIndex) => (
                <div
                  key={`${containerIndex}-${itemIndex}-${item}`}
                  draggable
                  onDragStart={() => handleDragStart(containerIndex, itemIndex)}
                  onDragEnd={handleDragEnd}
                  onDragEnter={() => handleDragEnter(containerIndex, itemIndex)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, containerIndex, itemIndex)}
                  style={{
                    padding: "10px",
                    margin: "10px 0",
                    backgroundColor: dragOver.containerIndex === containerIndex && dragOver.itemIndex === itemIndex
                      ? "#d4edda"
                      : "#fff",
                    border: dragging.containerIndex === containerIndex && dragging.itemIndex === itemIndex
                      ? "2px dashed #007bff"
                      : "1px solid #ccc",
                    borderRadius: "4px",
                    cursor: "move",
                    opacity: dragging.containerIndex === containerIndex && dragging.itemIndex === itemIndex ? 0.5 : 1,
                    transition: "background-color 0.2s, border 0.2s"
                  }}
                >
                  {item}
                </div>
              ))}
              {/* Allow dropping at the end of container */}
              {items.length > 0 && (
                <div
                  onDragEnter={() => handleDragEnter(containerIndex, items.length)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, containerIndex, items.length)}
                  style={{
                    padding: "10px",
                    minHeight: "20px",
                    backgroundColor: dragOver.containerIndex === containerIndex && dragOver.itemIndex === items.length
                      ? "#d4edda"
                      : "transparent",
                    borderRadius: "4px",
                    transition: "background-color 0.2s"
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
