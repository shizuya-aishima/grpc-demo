import { useAppSelector } from '../../app/hooks'

export const Room: React.FC = () => {
  const chatState = useAppSelector((state) => state.chat)
  console.log(chatState)
  return <>room</>
}
