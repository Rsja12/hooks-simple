import React from 'react'

import useResources from './useResources'

const ResourceList = ({ resource }) => {

    const allResources = useResources(resource)

    return (
        <ul>
            { allResources.map( record => <li key={record}>{ record.title }</li> ) }
        </ul>
    )
}

export default ResourceList
