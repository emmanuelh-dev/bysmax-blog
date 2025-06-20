import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import TransformatorCalculator from './TransformatorCalculator'
import ColorCodeMain from './colorCodeCalculator/ColorCodeMain'
import HeaderGenerator from './HeaderGenerator'
import SoftwareDownload from './SoftwareDownload'
import CursoTraccar from '@/app/[locale]/(cursos)/traccar/page'
import CalculadoraLeyOhm from './calculadoras/CalculadoraLeyOhm'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  TransformatorCalculator,
  ColorCodeMain,
  HeaderGenerator,
  SoftwareDownload,
  CursoTraccar,
  CalculadoraLeyOhm,
}
