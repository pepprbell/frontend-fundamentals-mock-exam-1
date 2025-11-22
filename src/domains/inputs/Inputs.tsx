import {
  TextField,
  Spacing,
  SelectBottomSheet,
} from 'tosslib';
import { comma, uncomma, isCommaNumber } from '../../utils/number';
import useProductStore from '../../store/productStore';

export default function Inputs() {
  const { terms, goalAmount, monthlyAmount,
          setTerms, setGoalAmount, setMonthlyAmount } = useProductStore()

  return (
    <>
      <TextField label="목표 금액" placeholder="목표 금액을 입력하세요" value={goalAmount == 0 ? '' : comma(goalAmount)} suffix="원"
        onChange={(e) => {
          if (isCommaNumber(e.target.value)) {
            console.log(1)
            setGoalAmount(uncomma(e.target.value))
          }
        }} />
      <Spacing size={16} />
      <TextField label="월 납입액" placeholder="희망 월 납입액을 입력하세요" value={monthlyAmount === 0 ? '' : comma(monthlyAmount)} suffix="원"
        onChange={(e) => {
          if (isCommaNumber(e.target.value)) {
            console.log(2)
            setMonthlyAmount(uncomma(e.target.value))
          }
        }} />
      <Spacing size={16} />
      <SelectBottomSheet label="저축 기간" title="저축 기간을 선택해주세요" value={terms}
        onChange={(e) => { setTerms(e) }}>
        <SelectBottomSheet.Option value={6}>6개월</SelectBottomSheet.Option>
        <SelectBottomSheet.Option value={12}>12개월</SelectBottomSheet.Option>
        <SelectBottomSheet.Option value={24}>24개월</SelectBottomSheet.Option>
      </SelectBottomSheet>
    </>
  )
}
