'use client'

import { ShowMoreProps } from '@/types'
import { updateSearchParams } from '@/utils'
import { useRouter } from 'next/navigation'
import { CustomButton } from './CustomButton'

export function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter()

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10

    const newPathname = updateSearchParams('limit', String(newLimit))

    router.push(newPathname)
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}
