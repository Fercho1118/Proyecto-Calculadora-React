import Keypad from '../components/Keypad'

export default {
  title: 'Calculator/Keypad',
  component: Keypad,
}

const mockHandler = (key) => console.log('Pressed:', key)

export const Default = () => <Keypad onKeyPress={mockHandler} />
export const WithActiveOperation = () => (
  <Keypad onKeyPress={mockHandler} activeOperation="+" />
)