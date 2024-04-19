"use client"
import React from 'react'
import { FeaturesCards } from './Pages/Home/Componets/MainSection/SectionCard'
import { UserCardImage } from './Pages/Home/Componets/Package/PackageCard'
import { Box } from '@mantine/core'
import {HeroImageRight } from './Pages/Home/Componets/Header/HeaderArea'

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

