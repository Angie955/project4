import CategorySelector from './components/CategorySelector';

function App() {
  const categories = ['Fruits', 'Vegetables', 'Dairy']; 
    const items = [
      { name: 'Apple', category: 'Fruits' },
      { name: 'Banana', category: 'Fruits' },
      { name: 'Carrot', category: 'Fruits' },
      { name: 'Broccoli', category: 'Vegetables' },
      { name: 'Milk', category: 'Dairy' },
      { name: 'Cheese', category: 'Dairy' },

    ]

  return (
      <div>
        <CategorySelector categories= {categories} items= {items} />
    </div>
  )
}

export default App
