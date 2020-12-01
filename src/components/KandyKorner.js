import React from "react"
import { LocationList } from "./locations/LocationList"
import { LocationsProvider } from "./locations/LocationsProvider"
import "./KandyKorner.css"


export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Kandy on the Korner</small>

        <h2>Locations</h2>
        <LocationsProvider>
            <LocationList />
        </LocationsProvider>
    </>
)