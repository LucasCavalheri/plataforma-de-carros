'use client'

import { useState } from 'react'
import { SearchManufacturer } from './SearchManufacturer'

export function SearchBar() {
  const [manufacturer, setManufacturer] = useState<string>('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {}

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}