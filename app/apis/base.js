
import { createApi } from '@ajax'
import { mockURL, /* baseURL, */ path } from '@config'

const prefix = 'usercenter'
const option = { baseURL: mockURL }
export const login = createApi(`${path}/${prefix}/login`, option) // 登陆
