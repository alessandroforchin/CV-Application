import { useState } from "react" 

export default function Test() {
  const [items, setItems] = useState([]);
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');

  function handleCompany(e) {
    setCompany(e.target.value)
  }

  function handleLocation(e) {
    setLocation(e.target.value)
  }

  function addItem() {
    setItems([
      ...items,
      {
        id: items.length,
        company: {company},
        location: {location},
      },
    ]);
  }

  return (
    <div>
      <form>
        <label htmlFor="company">Company:</label>
        <input id="company" value={company} onChange={handleCompany} />
        <label htmlFor="location">Location:</label>
        <input id="location" value={location} onChange={handleLocation} />
      </form>

      <button onClick={addItem}>Add Work Experience</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {company}, {location}
          </li>
        ))}
      </ul>
    </div>
  );
}
