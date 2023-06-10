'use client'

import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { SearchManufacturer } from './SearchManufacturer'

function SearchButton({ otherClasses }: { otherClasses: string }) {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="Magnifying Glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  )
}

export function SearchBar() {
  const [manufacturer, setManufacturer] = useState<string>('')
  const [model, setModel] = useState<string>('')

  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (manufacturer === '' && model === '') {
      return alert('Please fill in the search bar')
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  }

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    model ? searchParams.set('model', model) : searchParams.delete('model')
    manufacturer
      ? searchParams.set('manufacturer', manufacturer)
      : searchParams.delete('manufacturer')

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname)
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="Model Icon"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}
