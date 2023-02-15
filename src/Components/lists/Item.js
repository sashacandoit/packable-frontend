import React from "react"
import "./Item.css"
import "../styles/style.css"


const Item = ({ idx, handleRemove, handleUpCount, handleDownCount, item }) => {

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