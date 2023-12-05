import axios from 'axios'


export const HTTP_METHODS = {
  POST: 'post',
  GET: 'get',
  PUT: 'put',
  DELETE: 'delete',
  PATCH: 'patch'
}

const headersConfig = (token) => {
  return {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}

export const httpRequest = async ({
  method = HTTP_METHODS.POST,
  endpoint = '/',
  body = {},
  params = {},
  token
}) => {

  try {
    const options = {
      method,
      url: `${import.meta.env.VITE_URL_API_BASE}${endpoint}`,
      data: body,
      params,
      headers: headersConfig(token)
    }

    return await axios(options)

  } catch (error) {
    throw error
  }

}

