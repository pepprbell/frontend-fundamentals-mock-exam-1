// 천의 자리에 콤마 추가
export function comma(str: number | string) {
  return String(Number(str)).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')
}

// 천의 자리에 콤마 제거
export function uncomma(str: number | string) {
  return Number(String(str).replace(/,/g, ''))
}

// input 값이 숫자인지 검증
export function isCommaNumber(str: string) {
  if (Number(uncomma(str)) || str === '' || str === '0') {
    return true
  }
  return false
}