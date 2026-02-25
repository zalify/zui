import { cookies } from 'next/headers'

export const ThemeAttributes = async () => {
  const cookieStore = await cookies()
  const state = cookieStore.get('zui')

  const { accentColor, grayColor } = state?.value
    ? JSON.parse(state.value).state
    : { accentColor: 'neutral', grayColor: 'neutral' }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          document.documentElement.setAttribute('data-accent-color', '${accentColor}');
          document.documentElement.setAttribute('data-gray-color', '${grayColor}');
        `,
      }}
    />
  )
}
