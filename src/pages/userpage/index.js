import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserChangePassData, UserData, UserUpdateData } from '../../services'
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { useForm } from 'react-hook-form'

const UserPage = () => {
    const selector = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const { handleSubmit } = useForm()

    const profileEdit = (values, e) => {
        dispatch(UserUpdateData({
            userId: null,
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            userName: e.target[2].value,
            email: e.target[3].value,
            phoneNumber: e.target[4].value
        }))
    }

    const changePassword = (values, e) => {
        dispatch(UserChangePassData({
            currentPass: e.target[0].value,
            newPass: e.target[1].value
        }))
    }

    useEffect(() => {
        dispatch(UserData())
    }, [])

    return (
        <Container className='mt-4'>
            <Card>
                <CardHeader tag={'h4'}>Profili Düzenle</CardHeader>
                <CardBody>
                    <Form className='row' onSubmit={handleSubmit(profileEdit)}>
                        <FormGroup className='col-md-6'>
                            <Label>İsminiz</Label>
                            <Input type='text' defaultValue={selector === null || selector === undefined ? "" : selector.firstName} />
                        </FormGroup>
                        <FormGroup className='col-md-6'>
                            <Label>Soyisminiz</Label>
                            <Input type='text' defaultValue={selector === null || selector === undefined ? "" : selector.lastName} />
                        </FormGroup>
                        <FormGroup className='col-md-6'>
                            <Label>Kullanıcı Adınız</Label>
                            <Input type='text' defaultValue={selector === null || selector === undefined ? "" : selector.userName} />
                        </FormGroup>
                        <FormGroup className='col-md-6'>
                            <Label>E-Mail</Label>
                            <Input type='email' defaultValue={selector === null || selector === undefined ? "" : selector.email} />
                        </FormGroup>
                        <FormGroup className='col-md-6'>
                            <Label>Telefon</Label>
                            <Input type='tel' defaultValue={selector === null || selector === undefined ? "" : selector.phoneNumber} />
                        </FormGroup>
                        <Container className='d-flex justify-content-end'>
                            <Button color='warning'>Güncelle</Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>

            <Card className='mt-4 mb-5'>
                <CardHeader tag={'h4'}>Şifre Değiştir</CardHeader>
                <CardBody>
                    <Form className='row' onSubmit={handleSubmit(changePassword)}>
                        <FormGroup className='col-md-6'>
                            <Label>Mevcut Şifreniz</Label>
                            <Input type='password' />
                        </FormGroup>
                        <FormGroup className='col-md-6'>
                            <Label>Yeni Şifreniz</Label>
                            <Input type='password' />
                        </FormGroup>
                        <Container className='d-flex justify-content-end'>
                            <Button color='warning'>Güncelle</Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    )
}

export default UserPage