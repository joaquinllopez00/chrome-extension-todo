import type { Item } from '../types/Items';

export default function ItemList({ items }: { items: Item[] }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className='text-white'>
          {item.name}
        </div>
      ))}
    </div>
  );
}
