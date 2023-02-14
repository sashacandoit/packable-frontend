import React from "react"
import "./Item.css"
import "../styles/style.css"

const Item = ({item, qty, id, category}) => {
  return (
    <tr className="Item">
      <td className="Item-qty-cell text-center">
        <input type="number" step="1" min="0" name="qty" value={qty} title="Qty" className="Item-qty-input form-control fs-16 text-center qty" />
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