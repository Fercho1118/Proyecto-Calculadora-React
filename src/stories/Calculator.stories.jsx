import Calculator from '../components/Calculator'

export default {
  title: 'Calculator/Main',
  component: Calculator,
}

export const Default = () => <Calculator />
export const WithInitialValue = () => <Calculator initialValue="123" />
export const PerformingOperation = () => {
  return <Calculator />
}