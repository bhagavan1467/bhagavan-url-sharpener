import React, { use, useEffect, useState } from 'react'

import Service from '../../utils/http';
// import Service from '../utils/http'
import { Avatar, Center, Stack, Text } from '@mantine/core';
import { BackgroundImage, Box } from '@mantine/core';

const obj = new Service();


export default function Profile() {


    const [user, setUser] = useState({})
    const [avatar, setAvatar] = useState("")


    const getProfileData = async () => {
        try {
            let data = await obj.get("user/me")
            setUser(data)
            console.log(data);
            setAvatar(data.avatar)
        } catch (error) {
            console.log(error);
        }
    }




    useEffect(() => {


        getProfileData();
    }, [])


    return (
        <div>
            {
                <Center>
 <Box maw={900} mx="auto">
      <BackgroundImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
        radius="xl"
      >
        <Center p="md">
          <Text c="white">
            <Stack
                        h={400}
                        bg="var(--mantine-color-body)"
                        align="center"
                        justify="center"
                        gap="sm"
                    >
                        {user && <Avatar variant="filled" radius="xl" size="xl" src={user?.avatar} alt="it is me" />}
                        <Text fw={800} color='Black' size={"xl"} >NAME: {user?.name}</Text>
                        <Text fw={400} color='Black' size={"xl"} > EMAIL:{user?.email} </Text>
                        <Text fw={700} color='Black' size={"xl"} >UserId: {user?._id} </Text>
                        <Text fw={700} color='Black' size={"xl"} >Account Created: {user?.createdAt} </Text>
                    </Stack>
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
  
                   


                </Center>


            }
        </div>
    )
}


