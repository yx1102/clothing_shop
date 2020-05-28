import ajax from './ajax'

export const reqCategoryMenu = () => {
  return ajax({
    url: '/category',
    method: 'get'
  })
}

export function reqCategoryInfo(maitKey) {
  return ajax({
    url: "subcategory",
    params: {
      maitKey
    }
  });
}