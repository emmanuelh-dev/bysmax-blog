import { allCursos } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import React from 'react'
import Main from '../Main'
const POSTS_PER_PAGE = 5

function ServicesPage() {
  const cursos = allCoreContent(allCursos)
  const pageNumber = 1
  const initialDisplayPosts = cursos.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(cursos.length / POSTS_PER_PAGE),
  }
  return <Main posts={cursos} title="Cursos" curso />
}

export default ServicesPage
