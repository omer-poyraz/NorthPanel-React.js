import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import LgBg from '../../images/register.png'
import { Eye, EyeOff, Key, Lock, Mail, Phone, User } from 'react-feather'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { RegisterData } from '../../services'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    const [isEye, setIsEye] = useState(false)
    const { handleSubmit } = useForm()
    const dispatch = useDispatch()

    const onSubmit = (values, e) => {
        dispatch(RegisterData({
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            userName: e.target[2].value,
            email: e.target[3].value,
            phoneNumber: e.target[4].value,
            password: e.target[5].value
        }))
    }

    return (
        <Container className='loginpage r'>
            <Row className='h-100'>
                <Col sm={8} md={8}>
                    <Container className='lg-bg'>
                        <img src={LgBg} alt='' />
                    </Container>
                </Col>
                <Col sm={4} md={4} className='h-100 p-0 content m-0 d-flex align-items-center'>
                    <Container className='p-0 m-0'>
                        <h3>Aramıza hoşgeldiniz 🙂</h3>
                        <Label className='text-secondary'>Eğer bir hesabınız varsa lütfen giriş yapınız. Bir hesabınız yoksa kayıt olabilirsiniz.</Label>
                        <Form className='mt-4 row' onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup className='col-md-6 px-0 mx-0'>
                                <Label>Adınız</Label>
                                <Container className='position-relative p-0 m-0'>
                                    <User color='#ccc' />
                                    <Input type='text' />
                                </Container>
                            </FormGroup>
                            <FormGroup className='col-md-6 px-0 mx-0'>
                                <Label>Soyadınız</Label>
                                <Container className='position-relative p-0 m-0'>
                                    <User color='#ccc' />
                                    <Input type='text' />
                                </Container>
                            </FormGroup>
                            <FormGroup className='col-md-6 px-0 mx-0'>
                                <Label>Kullanıcı Adınız</Label>
                                <Container className='position-relative p-0 m-0'>
                                    <Key color='#ccc' />
                                    <Input type='text' />
                                </Container>
                            </FormGroup>
                            <FormGroup className='col-md-6 px-0 mx-0'>
                                <Label>E-Mail</Label>
                                <Container className='position-relative p-0 m-0'>
                                    <Mail color='#ccc' />
                                    <Input type='email' />
                                </Container>
                            </FormGroup>
                            <FormGroup className='col-md-6 px-0 mx-0'>
                                <Label>Telefon</Label>
                                <Container className='position-relative p-0 m-0'>
                                    <Phone color='#ccc' />
                                    <Input type='tel' />
                                </Container>
                            </FormGroup>
                            <FormGroup className='col-md-6 px-0 mx-0'>
                                <Label>Şifreniz</Label>
                                <Container className='position-relative p-0 m-0'>
                                    <Lock color='#ccc' />
                                    <Input type={isEye ? 'text' : 'password'} />
                                    {isEye ? <Eye color='grey' size={20} onClick={() => setIsEye(!isEye)} /> :
                                        <EyeOff color='grey' size={20} onClick={() => setIsEye(!isEye)} />}
                                </Container>
                            </FormGroup>
                            <Button color='success' className='w-100'>Kayıt Ol</Button>
                        </Form>
                        <Container className='text-center mt-2'>
                            <Label className='text-secondary'>Bir hesabınız var mı?</Label>
                        </Container>
                        <Container className='text-center'>
                            <Link to={"/login"}>Giriş Yap</Link>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterPage