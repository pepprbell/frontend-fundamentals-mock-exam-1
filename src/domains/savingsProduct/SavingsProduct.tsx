import { useMemo } from 'react';
import {
  colors,
  ListRow,
  Assets,
} from 'tosslib';
import useSavingsProductData from './hooks/useSavingsProductData';
import { comma } from '../../utils/number';
import useProductStore from '../../store/productStore';
import useSelectionStore from '../../store/selectionStore';

export default function SavingsProduct() {
  const { terms, monthlyAmount } = useProductStore()
  const { selectedProduct, setSelectedProduct } = useSelectionStore()
  const products = useSavingsProductData()
  const filteredProducts = useMemo(() => {
    return products.filter((each) => {
      return each.availableTerms === terms
          && (Number(monthlyAmount) === 0
            || (Number(monthlyAmount) <= each.maxMonthlyAmount
            && Number(monthlyAmount) >= each.minMonthlyAmount))
    })
  }, [products, terms, monthlyAmount])

  return (
    <>
      { filteredProducts.map((each) => (
        <ListRow
          key={each.id+each.name}
          contents={
            <ListRow.Texts
            type="3RowTypeA"
            top={each.name}
            topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
            middle={'연 이자율: ' + each.annualRate + '%'}
            middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
            bottom={comma(each.minMonthlyAmount) + '원 ~ ' + comma(each.maxMonthlyAmount) + '원 | ' + each.availableTerms + '개월'}
            bottomProps={{ fontSize: 13, color: colors.grey600 }}
          />
        }
        // todo: 원 색상 초록색으로
        right={ selectedProduct === each.id ? <Assets.Icon name="icon-check-fill" color={colors.green400} /> : null}
        onClick={() => {setSelectedProduct(each.id)}}
      />
      ))}
    </>
  )
}

export interface SavingsProduct {
  id: string;
  name: string;
  annualRate: number;
  maxMonthlyAmount: number;
  minMonthlyAmount: number;
  availableTerms: number;
}