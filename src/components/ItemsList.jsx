export default function ItemsList({ items, selectedCategory}) {
    
    return(
        <div>
            <h2>Items in {selectedCategory}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}