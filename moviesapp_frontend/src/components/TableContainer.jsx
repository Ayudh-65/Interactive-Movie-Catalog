/* eslint-disable react/prop-types */
import FullFeaturedCrudGrid from "./TableComponent"

export default function TableContainer({ movies }) {
  return (
    <div>
      <h1>Table Page</h1>
      <FullFeaturedCrudGrid movies={movies}/>
    </div>
  )
}
