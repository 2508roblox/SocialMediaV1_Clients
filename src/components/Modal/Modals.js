import React from 'react'
import PostShare from './../PostShare/PostShare';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
export const Modals = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Modal opened={opened} onClose={close} title="Authentication" >

        </Modal>
    )
}
