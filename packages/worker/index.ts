import {} from '@cloudflare/workers-types'
import {
  getAssetFromKV,
  serveSinglePageApp,
} from '@cloudflare/kv-asset-handler'
import { handleRequest as server } from '../server/src/entryPoints/cloudflare'

const DEBUG_MODE = true

const assetOptions = {
  cacheControl: {
    bypassCache: DEBUG_MODE,
  },
  mapRequestToAsset: serveSinglePageApp,
}

const handleAssetRequest = async (event: FetchEvent): Promise<Response> => {
  try {
    return await getAssetFromKV(event, assetOptions)
  } catch (e) {
    return new Response(
      DEBUG_MODE ? `Internal Server Error` : e.message || e.toString(),
      {
        status: 500,
        headers: { 'Content-Type': `text/plain` },
      }
    )
  }
}

const handleRequest = async (event: FetchEvent): Promise<Response> => {
  const { request } = event

  const resp = await server(request)
  if (resp.status !== 400) return resp

  return handleAssetRequest(event)
}

addEventListener(`fetch`, (event: Event & FetchEvent) => {
  event.respondWith(handleRequest(event))
})
