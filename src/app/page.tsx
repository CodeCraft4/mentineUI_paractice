"use client"
import React from 'react'
import { HeroImageRight } from './Pages/Home/Componets/Header/HeaderArea'
import { FeaturesCards } from './Pages/Home/Componets/MainSection/SectionCard'
import { UserCardImage } from './Pages/Home/Componets/Package/PackageCard'
import { Box } from '@mantine/core'

const page = () => {
  return (
    <Box bg={"#212112"}>
      <HeroImageRight/>
      <FeaturesCards/>
      <UserCardImage/>
    </Box>
  )
}

export default page

