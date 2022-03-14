import { Box, Button, TextField } from '@mui/material'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { roomCreateOperations } from './operations'
import { CreateRoomType } from './types'

export const CreateRoom: React.FC = () => {
  const {
    // register,
    handleSubmit,
    control,
  } = useForm<CreateRoomType>()
  const dispatch = useDispatch()
  const onSubmit: SubmitHandler<CreateRoomType> = (data) => {
    console.log('createRoom')
    dispatch(roomCreateOperations.createRoom(data))
  }
  return (
    <>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Controller
            name='name'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                id='standard-basic'
                label='room name'
                variant='standard'
                required
                {...field}
              />
            )}
          />
        </Box>
        <Box>
          <Button variant='contained' color='primary' type='submit'>
            部屋作成
          </Button>
        </Box>
      </form>
    </>
  )
}
