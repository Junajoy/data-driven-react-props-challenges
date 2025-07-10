export default function FilterableList({ items, filterCategory }) {
    const filteredItems = filterCategory
      ? items.filter(item => item.category === filterCategory)
      : items;
  
    return (
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            {item.name} ({item.category})
          </li>
        ))}
      </ul>
    );
  }
  