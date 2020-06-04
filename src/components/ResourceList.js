import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ResourceList = ({ resource }) => {

    const [ allResources, setAllResources ] = useState([])

    const fetchResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${ resource }`)

        setAllResources(response.data)
    }

    useEffect(() => {
        fetchResource(resource)
    }, [resource])

    return (
        <div>
            { allResources.length }
        </div>
    )
}

export default ResourceList
