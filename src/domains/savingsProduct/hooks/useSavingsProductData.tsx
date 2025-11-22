import { useEffect, useState } from "react"
import { http } from "tosslib";
import { SavingsProduct } from "../SavingsProduct";

export default function useSavingsProductData() {
  const [data, setData] = useState<SavingsProduct[]>([])

  useEffect(() => {
    http.get<SavingsProduct[]>(
      '/api/savings-products',
    ).then((response) => { // [{"id": 'savings-001', "name": "기본 정기적금", ... }]
      setData(response)
    })
  }, [])

  // // API 오류 캐치하기
  // try {
  //   await http.post(...);
  // } catch (e) {
  //   if (isHttpError(e)) {
  //     console.log(e.message);
  //   }
  // }


  return data
}