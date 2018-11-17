import React from 'react'
import { Button } from '@material-ui/core'

export default props =>
<Button variant="contained" color={props.color}>
        {props.text}
</Button>
