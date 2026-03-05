import { RichTextNode } from '@/lib/richTextRenderer'

export interface StrapiFilterOption {
  id: number;
  documentId: string;
  label: string;
  slug: string;
}

export interface StrapiFilterGroup {
  id: number;
  documentId: string;
  label: string;
  slug: string;
  options: StrapiFilterOption[];
}

export interface StrapiBlock {
  id: number
  __component: string
  body: string
}

export interface StrapiCategory {
  id: number
  documentId: string
  name: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface StrapiArticle {
  id: number
  documentId: string
  title: string
  description: string
  body?: RichTextNode[]
  blocks?: StrapiBlock[]
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  cover?: {
    url: string
  }
  filterOptions?: StrapiFilterGroup[];
}

export interface StrapiTeamMember {
  id: number
  documentId: string
  name: string
  position: string
  description: string
  videoLink?: string
  email: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image?: {
    url: string
  }
}

export interface StrapiHomeGalleryImage {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image: {
    url: string
  }
  alt?: string
  description?: string
}

export interface StrapiMaterial {
  id: number
  documentId: string
  name: string
  description?: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image?: {
    url: string
  }
}

export interface StrapiIndustry {
  id: number
  documentId: string
  name: string
  description?: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface StrapiPortfolioImage {
  id: number
  documentId: string
  name?: string
  description?: string
  alt?: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image: {
    url: string
    name: string
    alternativeText?: string
    width: number
    height: number
  }
  fullSizeImage: {
    url: string
    name: string
    alternativeText?: string
    width: number
    height: number
  }
  industry?: StrapiIndustry
  material?: StrapiMaterial
}

export interface StrapiTestimonial {
  id: number
  documentId: string
  rating: number
  description: string
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  avatar?: {
    url: string
  }
}

export interface StrapiJobType {
  id: number
  documentId: string
  type: string
  location?: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  jobOpenings?: StrapiJobOpening[]
}

export interface StrapiJobDepartment {
  id: number
  documentId: string
  department: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  jobOpenings?: StrapiJobOpening[]
}

export interface StrapiJobOpening {
  id: number
  documentId: string
  name: string
  link?: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  jobDepartment?: StrapiJobDepartment
  jobType?: StrapiJobType
}
