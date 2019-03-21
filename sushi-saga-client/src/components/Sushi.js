import React, { Fragment } from 'react'

const Sushi = (props) => {

  const handleClick = () => {
    if (props.budget - props.sushi.price >= 0)
      props.getSushi(props.sushi.id)
  }

  return (
    <div className="sushi">
      <div className="plate"
           onClick={handleClick}>
           {
             props.eaten.find(s => s.id === props.sushi.id) ?
               null
             :
               <img src={props.sushi.img_url} width="100%" alt="sushi" />
           }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi

// {
//   true ?
//     null
//   :
//     <img src={props.sushi.img_url} width="100%" alt="sushi" />
// }
