import React, {useState} from "react"
import "./Item.css"
import "../styles/style.css"


const Item = ({ item, qty, id, category }) => {

  const INITIAL_STATE = { qty };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }))
    
    let localItems = JSON.parse(localStorage.getItem('items'))
    let index = localItems.map(function (i) { return i.id; }).indexOf(id);
    localItems[index] = formData.qty
    localStorage.setItem('items', JSON.stringify(localItems))
  }

  // let localItems = JSON.parse(localStorage.getItem('items'))
  // let index = localItems.map(function (i) { return i.id; }).indexOf(id);
  // localItems[index] = formData.qty
  // localStorage.setItem('items', JSON.stringify(localItems))

  return (
    <tr className="Item">
      <td className="Item-qty-cell text-center">
        <input
          onChange={handleChange}
          type="number"
          step="1"
          min="0"
          name="qty"
          value={formData.qty}
          title="Qty"
          className="Item-qty-input form-control fs-16 text-center qty" />
      </td>
      <td className="Item-cell lead fs-16">{item}</td>
      <td className="Item-cell text-primary">{category}</td>
      <td className="Item-delete-cell text-center">
        <a href="#x">
          <i className="far fa-times-circle teble-remove danger-hover">
          </i>
        </a>
      </td>
    </tr>
  )
}

export default Item;