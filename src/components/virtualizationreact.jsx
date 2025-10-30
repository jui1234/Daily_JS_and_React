import { List } from 'react-window';

export default function VirtualizationComponent() {
  // Create an array of 1000 strings
  const items = Array.from({ length: 1000 }, (_, index) => `Item ${index}`);

  return (
    <List
      items={items}
      height={300}
      width={300}
      itemSize={35}
    >
      {(item, index, { style }) => (
        <div style={style}>
          {item}
        </div>
      )}
    </List>
  );
}
