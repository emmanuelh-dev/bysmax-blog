export type LocaleMetadata = {
  title: string
  description: string
  locale: string
}

export type LocaleUI = {
  startNow: string
  needServer: string
  courseContent: string
  aboutCourse: string
  courseDescription: string
}

export type CourseSection = {
  title: string
  link: string
}

export type CourseContent = {
  title: string
  show: boolean
  description: string
  sections: CourseSection[]
}

export type LocaleData = {
  metadata: LocaleMetadata
  ui: LocaleUI
  content: CourseContent[]
}

export type LocaleContent = {
  [key: string]: LocaleData
}