
import React from 'react'
import {generatePortalLink} from "@/actions/generatePortalLink";
const ManageAccountButton = () => {
  return (
    <form action={generatePortalLink}>
        <button type='submit'>Manage Billing</button>
    </form>
  )
}

export default ManageAccountButton