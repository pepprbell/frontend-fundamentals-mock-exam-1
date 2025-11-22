import { useState } from 'react';
import {
  Border,
  NavigationBar,
  Spacing,
  Tab,
} from 'tosslib';
import SavingsProduct from 'domains/savingsProduct/SavingsProduct';
import CalculatedResult from 'domains/calculatedResult/CalculatedResult';
import Inputs from 'domains/inputs/Inputs';

export function SavingsCalculatorPage() {
  const [tab, setTab] = useState<string>('products')

  return (
    <>
      <NavigationBar title="적금 계산기" />

      <Spacing size={16} />

      <Inputs />

      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />

      {/* 탭 헤더 */}
      <Tab onChange={(value) => setTab(value)}>
        <Tab.Item value="products" selected={tab === 'products'}>
          적금 상품
        </Tab.Item>
        <Tab.Item value="results" selected={tab === 'results'}>
          계산 결과
        </Tab.Item>
      </Tab>

      {/* 적금 상품 탭 */}
      {tab === 'products' && <SavingsProduct />}

      <Spacing size={8} />

      {/* 계산 결과 탭 */}
      {tab === 'results' && <CalculatedResult />}      
    </>
  );
}
