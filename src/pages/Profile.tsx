import { Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { setTitle } from '../utils/utils';

export default function Profile() {
    const [profile, setProfile] = useState()

    useEffect(() => {
        setTitle('Profile')
      }, [])

    return <Heading as="h1" size="4xl">
        Profile
    </Heading>
}