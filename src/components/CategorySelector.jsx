import { useState } from 'react';
import ItemsList from './ItemsList';

function CategorySelector({ categories, items }) {
    const [selectedCategory, setSelectedCategory] = useState('');
    
    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }

    const filteredItems = items.filter(item => item.category === selectedCategory);
    return (
        <div>
            <h2>Select a Category</h2>
            <select onChange={handleCategoryChange}>
                <option value="">Select...</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                    {category}
                    </option>
                ))}
            </select>
            {selectedCategory ? <ItemsList items={filteredItems} selectedCategory={selectedCategory} /> : null}
        </div>
    );
    }
export default CategorySelector;