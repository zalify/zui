import type { Doc } from '.velite'
import { getFramework } from '~/lib/get-framework'
import { transformMdxContent } from '~/lib/mdx'
import { CopyPageWidgetClient } from './copy-page-widget-client'

interface Props {
  doc: Doc
}

export const CopyPageWidget = async (props: Props) => {
  const { doc } = props

  const framework = await getFramework()
  const content = await transformMdxContent(doc, framework)

  const pageUrl = `https://ui.zalify.com/api/${framework}/docs/${doc.slug}`
  const prompt = encodeURIComponent(
    `Use web browsing to access links and information: ${pageUrl}\n\nI want to ask some questions`,
  )

  return <CopyPageWidgetClient content={content} pageUrl={pageUrl} prompt={prompt} />
}
