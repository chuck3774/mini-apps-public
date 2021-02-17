import React from 'react';

const EventList = (props) => {
  return (
      <div className="list">
    {
      props.events.map((event, i) => {
        return <div key={i} className="item">{event.description}</div>
      })
    }
      </div>
  )
}

export default EventList;