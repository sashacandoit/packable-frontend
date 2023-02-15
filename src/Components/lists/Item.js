import React, {useState} from "react"
import "./Item.css"
import "../styles/style.css"


const Item = ({ idx, handleRemove, handleUpCount, handleDownCount, item }) => {

  // const INITIAL_STATE = { id, item, category, qty };
  // const [formData, setFormData] = useState(INITIAL_STATE);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(formData => ({ ...formData, [name]: value }))

  //   let localItems = JSON.parse(localStorage.getItem('items'))
  //   let index = localItems.map(function (i) { return i.id; }).indexOf(id);
  //   localItems[index] = formData
  //   localStorage.setItem('items', JSON.stringify(localItems))
  // }

  // let localItems = JSON.parse(localStorage.getItem('items'))
  // let index = localItems.map(function (i) { return i.id; }).indexOf(id);
  // localItems[index] = formData.qty
  // localStorage.setItem('items', JSON.stringify(localItems))

  return (
    <tr className="Item">
      <td className="Item-qty-cell text-center">
        <button className="Item-qty-arrow text-link" onClick={() => handleUpCount(idx)}>
          <i className="fas fa-arrow-up mb-5"></i>
        </button>
        <span className="Item-qty fs-18">{item.qty}</span>
        <button className="Item-qty-arrow text-link" onClick={() => handleDownCount(idx)}>
          <i className="fas fa-arrow-down mb-5"></i>
        </button>
        {/* <input
          onChange={handleChange}
          type="number"
          step="1"
          min="0"
          name="qty"
          value={formData.qty}
          title="Qty"
          className="Item-qty-input form-control fs-16 text-center qty" /> */}
      </td>
      <td className="Item-cell lead fs-16">{item.item}</td>
      <td className="Item-cell text-primary">{item.category}</td>
      <td className="Item-delete-cell text-center">
        <button className="Item-delete-btn" onClick={() => handleRemove(item.id)}>
          <i className="far fa-times-circle teble-remove danger-hover">
          </i>
        </button>
      </td>
    </tr>
  )
}

export default Item;