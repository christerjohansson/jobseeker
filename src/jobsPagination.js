import React from 'react'
import {Pagination} from 'react-bootstrap'

export default function jobsPagination({page, setPage}) {
    return (
        <Pagination>
            <Pagination.Prev />
            <Pagination.Next />
        </Pagination>
    )
}
