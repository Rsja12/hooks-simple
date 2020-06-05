import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ResourceList = ({ resource }) => {

    const [ allResources, setAllResources ] = useState([])

    // Have to use an IIFE to avoid console warning about not returning a promise
    useEffect(() => {
        
        (async resource => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

            setAllResources(response.data)
        })(resource)

    }, [resource])

    return (
        <ul>
            { allResources.map( record => <li key={record}>{ record.title }</li> ) }
        </ul>
    )
}

export default ResourceList
