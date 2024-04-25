import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import LgBg from '../../images/login.png'
import { Eye, EyeOff, Lock, User } from 'react-feather'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { LoginData } from '../../services'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [isEye, setIsEye] = useState(false)
    const { handleSubmit } = useForm()
    const dispatch = useDispatch()

    const onSubmit = (values, e) => {
        dispatch(LoginData({ userName: e.target[0].value, password: e.target[1].value }))
    }

    return (
        <Container className='loginpage'>
            <Row className='h-100'>
                <Col sm={8} md={8}>
                    <Container className='lg-bg'>
                        <img src={LgBg} alt='' />
                    </Container>
                </Col>
                <Col sm={4} md={4} className='h-100 p-0 m-0 content d-flex align-items-center'>
                    <Container className='p-0 m-0'>
                        <h3>North Panel'e Hoşgeldiniz 🙂</h3>
                        <Label className='text-secondary'>Eğer bir hesabınız varsa lütfen giriş yapınız. Bir hesabınız yoksa kayıt olabilirsiniz.</Label>
                        <Form className='mt-4' onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup>
                                <Label>Kullanıcı Adı</Label>
                                <Container className='position-relative p-0 m-0'>
                                    <User color='#ccc' />
                                    <Input type='text' />
                                </Container>
                            </FormGroup>
                            <FormGroup>
                                <Label>Şifre</Label>
                                <Container className='position-relative p-0 m-0'>
                                    <Lock color='#ccc' />
                                    <Input type={isEye ? 'text' : 'password'} />
                                    {isEye ? <Eye color='grey' size={20} onClick={() => setIsEye(!isEye)} /> :
                                        <EyeOff color='grey' size={20} onClick={() => setIsEye(!isEye)} />}
                                </Container>
                            </FormGroup>
                            <Button color='success' className='w-100'>Giriş Yap</Button>
                        </Form>
                        <Container className='text-center mt-2'>
                            <Label className='text-secondary'>Bir hesabınız yok mu?</Label>
                        </Container>
                        <Container className='text-center'>
                            <Link to={"/register"}>Kayıt Ol</Link>
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage