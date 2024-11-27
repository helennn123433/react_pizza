import { useState } from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    "Всё",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            onClick={() => setActiveIndex(i)}
            className={activeIndex === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
