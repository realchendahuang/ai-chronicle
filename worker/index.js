export default {
  async fetch(request) {
    const url = new URL(request.url)
    const path = url.pathname

    if (path === '/ai-chronicle') {
      return Response.redirect(`${url.origin}/ai-chronicle/`, 308)
    }

    if (path.startsWith('/ai-chronicle/')) {
      const targetUrl = new URL(path + url.search, 'https://ai-chronicle-9i3.pages.dev')

      try {
        return await fetch(new Request(targetUrl, request))
      } catch (error) {
        console.error(JSON.stringify({
          message: 'AI Chronicle origin fetch failed',
          path,
          error: error instanceof Error ? error.message : String(error),
        }))
        return new Response('AI Chronicle is temporarily unavailable.', {
          status: 502,
          headers: { 'content-type': 'text/plain; charset=utf-8' },
        })
      }
    }

    return fetch(request)
  }
}
