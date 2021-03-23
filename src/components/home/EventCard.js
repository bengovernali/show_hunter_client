import React from 'react'

import { Card, EventImage, EventLink } from '../styled-components/CardStyles'

function EventCard({image, url, name, venue, date, time}) {
    return (
        <Card>
          <EventImage className="card-image" src={image} alt="event" />
          <EventLink target="_blank" rel="noopener noreferrer" href={url}>
            {name}
          </EventLink>
          <p>{venue}</p>
          <p>{date}</p>
          <p>{time}</p>
        </Card>
      );
}

export default EventCard