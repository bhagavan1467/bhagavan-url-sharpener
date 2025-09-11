import React, { use, useEffect, useState } from 'react'

import Service from '../../utils/http';
// import Service from '../utils/http'
import { Avatar, Center, Stack, Text } from '@mantine/core';
const obj = new Service();


export default function Profile() {


   const [user, setUser] = useState({})


   const getProfileData = async () => {
       try {
           let data = await obj.get("user/me")
           setUser(data)
           console.log(data);
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

                  <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="sm"
    >
                <Avatar variant="filled" radius="xl" size="xl" src="{user?.avatar}" />
                     <Text fw={800}color='Black' size={"xl"} >NAME: {user?.name}</Text>
                    <Text fw={400} color='Black' size={"xl"} > EMAIL:{user?.email} </Text>
                    <Text fw={700} color='Black' size={"xl"} >UserId: {user?._id} </Text>
                     <Text fw={700}color='Black' size={"xl"} >Account Created: {user?.createdAt} </Text>
  </Stack>


               </Center>


           }
       </div>
   )
}


