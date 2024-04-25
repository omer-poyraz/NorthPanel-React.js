import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'

const SocialPage = () => {
    const { handleSubmit } = useForm()
    const [modal, setModal] = useState(false)

    const onSubmit = (values, e) => {

    }

    const addSocialMedia = (values, e) => {

    }

    return (
        <Container className='mt-4'>
            <Container className='mt-4 d-flex justify-content-end'>
                <Button color='success' onClick={() => setModal(!modal)}>Yeni Sosyal Medya</Button>
            </Container>
            <Card className='mt-4'>
                <CardHeader tag={'h4'}>Sosyal Medya</CardHeader>
                <CardBody>
                    <Form onSubmit={handleSubmit(onSubmit)} className='row'>
                        <FormGroup className='col-md-6'>
                            <Label>İnstagram</Label>
                            <Input type='url' />
                        </FormGroup>
                        <FormGroup className='col-md-6'>
                            <Label>Facebook</Label>
                            <Input type='url' />
                        </FormGroup>
                        <FormGroup className='col-md-6'>
                            <Label>Twitter</Label>
                            <Input type='url' />
                        </FormGroup>
                        <FormGroup className='col-md-6'>
                            <Label>Youtube</Label>
                            <Input type='url' />
                        </FormGroup>
                        <Container className='mt-4 d-flex justify-content-end'>
                            <Button color='warning'>Düzenle</Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>

            <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader tag={'h4'} toggle={() => setModal(!modal)}>Yeni Sosyal Medya</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit(addSocialMedia)}>
                        <FormGroup>
                            <Label>Sosyal Medya Adı</Label>
                            <Input type='text' />
                        </FormGroup>
                        <FormGroup>
                            <Label>İkon</Label>
                            <Input type='file' />
                        </FormGroup>
                        <Container className='mt-3 d-flex justify-content-end'>
                            <Button color='success'>Ekle</Button>
                        </Container>
                    </Form>
                </ModalBody>
            </Modal>
        </Container>
    )
}

export default SocialPage