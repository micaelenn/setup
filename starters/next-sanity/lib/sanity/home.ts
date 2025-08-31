import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'

// SEO
export const getPageSeo = () => {
    const homepageSeo = client.fetch(
        `*[_type=="${schemas.homepage}"][0] {
            homepage
        }`
    )
    return homepageSeo
}