import request from '@/utils/request'

export function getSqlData(params) {
  return request(
    {
      url: `/text-api/dataContrast/toSelect`,
      data: params,
      method: 'post'
    }
  )
}
export function getAllSql(params) {
  return request(
    {
      url: `/text-api/dataContrast/toGetSql`,
      data: params,
      method: 'post'
    }
  )
}
export function getAllResult(params) {
  return request(
    {
      url: `/text-api/dataContrast/toGetAllResult`,
      data: params,
      method: 'post'
    }
  )
}
