import React from 'react'
import { UserList } from '../users/UserList';

export const Main = (props) => {
    const {state} = props
    return (
        <UserList  listView={state}/>
    )
}