import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const { domain } = useRuntimeConfig()
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: domain,
  })

  const routes = [
    { path: '/', meta: { changefreq: 'monthly' } },
    { path: '/about', meta: { changefreq: 'monthly' } },
    { path: '/projects', meta: { changefreq: 'monthly' } },
    { path: '/stack', meta: { changefreq: 'weekly' } },
    { path: '/bookmarks', meta: { changefreq: 'weekly' } },
    { path: '/notes', meta: { changefreq: 'daily' } },
  ]

  for (const route of routes) {
    sitemap.write({
      url: route.path,
      changefreq: route.meta.changefreq ?? 'monthly',
    })
  }

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: doc.changefreq,
      lastmod: doc.updatedAt ?? doc.createdAt,
    })
  }

  sitemap.end()

  return streamToPromise(sitemap)
})
