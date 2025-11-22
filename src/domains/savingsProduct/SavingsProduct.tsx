import {
  colors,
  ListRow,
  Assets,
} from 'tosslib';
import useSavingsProductData from './hooks/useSavingsProductData';
import { comma } from '../../utils/number';
import useProductStore from '../../store/productStore';
import useSelectionStore from '../../store/selectionStore';
import useFilterData from './hooks/useFilterData';

export default function SavingsProduct({ count = -1, sort = false }: { count?: number, sort?: boolean }) {
  const { terms, monthlyAmount } = useProductStore()
  const { selectedProduct, setSelectedProduct } = useSelectionStore()
  
  const products = useSavingsProductData()
  const filteredProducts = useFilterData(products, terms, monthlyAmount, count, sort)

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
        right={ selectedProduct?.id === each.id ? <Assets.Icon name="icon-check-fill" color={colors.green400} /> : null}
        onClick={() => {setSelectedProduct(each)}}
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