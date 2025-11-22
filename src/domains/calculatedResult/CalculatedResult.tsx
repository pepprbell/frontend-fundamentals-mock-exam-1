import { useMemo } from 'react';
import {
  ListHeader,
  ListRow,
  colors,
  Spacing,
  Border,
} from 'tosslib';
import { comma } from '../../utils/number';
import useProductStore from '../../store/productStore';
import useSelectionStore from '../../store/selectionStore';
import SavingsProduct from '../savingsProduct/SavingsProduct';

export default function CalculatedResult() {
  const { terms, monthlyAmount, goalAmount } = useProductStore()
  const { selectedProduct } = useSelectionStore()

  const expectedIncome = useMemo<number>(() => 
    monthlyAmount * terms * (1 + (selectedProduct?.annualRate || 0) * 0.5)
  ,[monthlyAmount, terms, selectedProduct])

  const recommendedMonthlyAmount = useMemo<number>(() => {
    try {
      const result = Math.round(goalAmount / (terms * (1 + (selectedProduct?.annualRate || 0) * 0.5)) / 1000) * 1000
      return result
    } catch (e) {
      return 0
    }
  },[goalAmount, terms, selectedProduct])


  return (
    <>
      { selectedProduct ? (
        <>
          <ListRow
            contents={
              <ListRow.Texts
                type="2RowTypeA"
                top="예상 수익 금액"
                topProps={{ color: colors.grey600 }}
                bottom={`${comma(expectedIncome)}원`}
                bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
              />
            }
          />
          <ListRow
            contents={
              <ListRow.Texts
                type="2RowTypeA"
                top="목표 금액과의 차이"
                topProps={{ color: colors.grey600 }}
                bottom={`${comma(goalAmount - expectedIncome)}원`}
                bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
              />
            }
          />
          <ListRow
            contents={
              <ListRow.Texts
                type="2RowTypeA"
                top="추천 월 납입 금액"
                topProps={{ color: colors.grey600 }}
                bottom={`${comma(recommendedMonthlyAmount)}원`}
                bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
              />
            }
          />
        </>
      ) : (
        <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해주세요." />} />
      ) }

      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />

      {/* todo: 월 납입 금액이 아닌 추천 월 납입 금액으로도 확장 가능하도록 */}
      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />

      <SavingsProduct count={2} sort={true} />

      <Spacing size={40} />
    </>
  )
}