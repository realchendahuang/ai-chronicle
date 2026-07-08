export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    const path = url.pathname

    // Only handle /ai-chronicle paths
    if (path.startsWith('/ai-chronicle')) {
      // Strip prefix and forward to Pages project
      const newPath = path.replace(/^\/ai-chronicle/, '') || '/'
      const targetUrl = `https://ai-chronicle-9i3.pages.dev${newPath}${url.search}`
      return fetch(new Request(targetUrl, request))
    }

    // Everything else: let it pass through to the origin server
    // This worker only intercepts /ai-chronicle/* 
    return fetch(request)
  }
}
