export const dynamic = 'force-dynamic'

// internal dependencies
import HomeLayout from "@/layouts/HomeLayout"
import { getPageSeo } from "@/lib/sanity/home";

export async function generateMetadata() {
  const seo = await getPageSeo()

  return {
    title: '',
    description: ''
  }
}

export default async function Home() {
  return (
    <HomeLayout />
  )
}