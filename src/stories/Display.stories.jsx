import Display from '../components/Display'

export default {
  title: 'Calculator/Display',
  component: Display,
}

export const Empty = () => <Display value="" />
export const WithNumber = () => <Display value="123.45" />
export const ErrorState = () => <Display value="ERROR" />
export const MaxLength = () => <Display value="999999999" />
export const WithDecimal = () => <Display value="3.141592" />