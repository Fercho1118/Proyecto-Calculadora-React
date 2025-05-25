import Key from '../components/Key'

export default {
  title: 'Calculator/Key',
  component: Key,
}

export const NumberKey = () => <Key value="5" onClick={console.log} />
export const OperationKey = () => (
  <Key value="+" onClick={console.log} className="operation" />
)
export const ZeroKey = () => <Key value="0" onClick={console.log} />
export const DecimalKey = () => <Key value="." onClick={console.log} />