import { FormControl, OutlinedInput } from '@mui/material'
import React from 'react'

const CommentPannel = ({comment}) => {
  return (
    <>
    <FormControl sx={{ width: '100%', marginTop: "1rem" }}>
      <OutlinedInput value= {comment.text} />
    </FormControl>
    </>
  )
}

export {CommentPannel}