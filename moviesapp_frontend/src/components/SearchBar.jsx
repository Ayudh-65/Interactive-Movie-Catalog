/* eslint-disable react/prop-types */
import { TextField, Button } from "@mui/material"
import { useState } from "react"

export default function SearchBar({ handleSearch }) {

    const [searchQuery, setSearchQuery] = useState("");

  return (
    <form onSubmit={(e) => {e.preventDefault()}} style={{width: "70%"}}>
    <TextField sx={{width: "80%"}} variant='filled' placeholder="Search" onChange={(e) => {
        setSearchQuery(e.target.value);
    }} />
    <Button type="submit" variant="contained" sx={{fontSize: 25}} onClick={() => {handleSearch(searchQuery)}} >🔍</Button>
    </form>
  )
}
