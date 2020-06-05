import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = resource => {

    const [ allResources, setAllResources ] = useState([])

    // Have to use an IIFE to avoid console warning about not returning a promise
    useEffect(() => {
        
        (async resource => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

            setAllResources(response.data)
        })(resource)

    }, [resource])

    return allResources

}

export default useResources