import { useEffect, useState } from "react"
import { http, isHttpError } from "tosslib";
import { SavingsProduct } from "../SavingsProduct";

export default function useSavingsProductData() {
  const [data, setData] = useState<SavingsProduct[]>([])

  useEffect(() => {
    try {
      http.get<SavingsProduct[]>(
        '/api/savings-products',
      ).then((response) => { // [{"id": 'savings-001', "name": "기본 정기적금", ... }]
        setData(response)
      })
    } catch (e) {
      if (isHttpError(e)) {
        console.error(e.message)
      }
    }
  }, [])
  
  return data
}