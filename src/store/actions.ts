import { createAction } from '@reduxjs/toolkit'

import { GetPostsApiPayload } from './types'

export const getPostsApi = createAction<GetPostsApiPayload>('getPostsApi')

export const clearStore = createAction('clearStore')
