import { Center, Flex, Heading, Spinner, Stack, useColorModeValue } from '@chakra-ui/react';

type LoadingPageProps = {
  h?: string
}

export default function LoadingPage(props: LoadingPageProps) {
  return <Stack
    minH={ props.h ?? '100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.100', 'gray.700')}>
    <Spinner size="xl" emptyColor='purple.400' color='purple.800' />
  </Stack>
}