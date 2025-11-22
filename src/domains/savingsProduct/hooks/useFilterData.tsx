import { useEffect, useState } from "react"
import { SavingsProduct } from "../SavingsProduct"

export default function useFilterData(
  products: SavingsProduct[],
  terms: number,
  monthlyAmount: number,
  count: number,
  sort: boolean
) {
  const [filteredProducts, setFilteredProducts] = useState<SavingsProduct[]>([])

  useEffect(() => {
    let result = products.filter((each) => {
      return each.availableTerms === terms
          && (Number(monthlyAmount) === 0
            || (Number(monthlyAmount) <= each.maxMonthlyAmount
            && Number(monthlyAmount) >= each.minMonthlyAmount))
    })
    if (count !== -1) {
      result = result.slice(0, count)
    }
    if (sort) {
      result = result.sort((a, b) => b.annualRate - a.annualRate)
    }
    setFilteredProducts(result)

    // unmount
    return () => {
      setFilteredProducts([])
    }
  }, [products, terms, monthlyAmount, count, sort])

  return filteredProducts
}
