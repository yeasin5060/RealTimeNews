import React from 'react'

function Heading ({tag , className , value}) {
    const Tag = `${tag}`
    return <Tag className = {className}>{value}</Tag>
}

export default Heading