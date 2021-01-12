import React from 'react'

import Name from './Name'

/* ########################### */
/* ##### Baby names list ##### */
/* ########################### */

export default ({ 
  data, 
  filter
}) => {
  const input = filter.toLowerCase()
  
  // Gather list of names
  const names = data
    // filtering out the names that...
    .filter((person, i) => {
      return (
        // ...are not matching the current search value
      !person.recipe.label.toLowerCase().indexOf(input)
      )
    })
    // ...output a <Name /> component for each name
    .map((person, i) => {
    // only display names that match current input string
      return (
        <Name 
          id={person.label}
          key={i}
          info={person}
        />
      )
    })

  /* ##### the component's output ##### */
  return (
    <ul>
      {names}
    </ul>
  )
}
