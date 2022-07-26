import React from 'react'
import { chakra, Text, useRadio, RadioProps, useRadioGroup, Stack, HStack } from '@chakra-ui/react'
import useStore from '../../store'
import { StoreT } from 'common/src/types'

const ListItem = (props: RadioProps & { label: string }) => {
  const { state, getInputProps, getLabelProps, htmlProps } = useRadio(props)

  return (
    <chakra.label cursor="pointer" {...htmlProps}>
      <input {...getInputProps()} hidden />
      <Text
        {...getLabelProps()}
        border={state.isChecked ? '1px solid white' : '1px solid black'}
        borderRadius="50%"
        padding={{ base: '0 0.2rem', sm: '0 0.5rem' }}
      >
        {props.label}
      </Text>
    </chakra.label>
  )
}

const SizesList = ({ sizes, itemId }: { sizes: string[]; itemId: number }) => {
  const changeItemSize = useStore((state: StoreT) => state.changeItemSize)

  const { getRadioProps, getRootProps } = useRadioGroup({
    onChange: (value) => changeItemSize(itemId, value),
    defaultValue: sizes[0],
  })

  return (
    <Stack {...getRootProps()}>
      <HStack>
        {sizes.map((item) => {
          return <ListItem key={item} label={item} {...getRadioProps({ value: item })} />
        })}
      </HStack>
    </Stack>
  )
}

export default SizesList
