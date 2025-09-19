import React from 'react'
import { Container, Text, TextInput } from '@mantine/core';
import props from 'prop-types';
import Service from '../utils/http'
const obj = new Service();
import { QRCodeSVG } from 'qrcode.react';
import { Image } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconCopy } from '@tabler/icons-react';
import { Button } from '@mantine/core';
export default function UrlResponse(props) {
  const clipboard = useClipboard({ timeout: 500 });
  const surl = obj.getBaseURL("") + '/api/s/' + props?.response?.shortCode;
  return (
    <div>
      <stack>
        <center>
          <Container size="xl" mt="xl" >
            <Text fw={700} color="red" size='xl'>SHORT URL:</Text>

            <TextInput c="blue" value={surl} rightSection={<IconCopy
              onClick={() => {
                console.log("clicked");
                clipboard.copy(surl)


              }}
            />}
            />

            <QRCodeSVG imageSettings={{
              excavate: true,
              src: '/HomeBackground.png',
              height: 50,
              width: 50,
            }} value={surl} size={200}>
              <Image src={'/HomeBackground.png'} />
            </QRCodeSVG>

          </Container>
          <Container size="xl" mt="xl" >
            <Button  c="black" color ="red" onClick={() => {
              props.setResponse(null)
            }}> Generate New URL </Button>
          </Container>
        </center>
      </stack>
    </div>
  )
}
