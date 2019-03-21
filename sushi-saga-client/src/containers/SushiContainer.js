import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushi = () => {
    return props.sushis.slice(props.startIndex, props.startIndex+4).map(s => {
      return <Sushi sushi={s} getSushi={props.getSushi} eaten={props.eaten} budget={props.budget}/>
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {
          renderSushi()
        }
        <MoreButton addSushi={props.addSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
