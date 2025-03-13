import axios from 'axios'

export async function searchPhotos(query, page) {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query,
        page,
        per_page: 12,
        client_id: 'KoZ0nS05_XZwfMhheKc1rLIQFm_SoMXh_K8kEw9HJeE',
      },
    })
    return response.data.results
  } catch (erro) {
    throw new Error()
  }
}
