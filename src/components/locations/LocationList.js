import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationsProvider"
import { Location } from "./Location"


export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext) 




    useEffect(() => {
        getLocations()
    },
    [])


    return (

        <div className="locations">
            {
                locations.map(l => <Location key={locations.id} location={l} />)
 
            }
        </div>
    )

}

