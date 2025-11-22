import { useEffect } from 'react';
import {
  colors,
  ListRow,
} from 'tosslib';
import useSavingsProductData from './hooks/useSavingsProductData';
import { comma } from '../../utils/number';

export default function SavingsProduct() {
  const products = useSavingsProductData()

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <>
      { products.map((each) => (
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
        onClick={() => {}}
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