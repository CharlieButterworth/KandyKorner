import React from "react"
import "./Locations.css"


export const Location = ({ location }) => (
    <section className="location">
        <h3 className="location_name">{location.name}</h3>
        <div className="location_address">{location.address}</div>
    </section>
)