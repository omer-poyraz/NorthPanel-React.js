import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserDeleteData, UsersData, UserUpdateData } from '../../services'
import { Table } from 'antd'
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { useForm } from 'react-hook-form'
import { CiEdit, CiGrid41, CiTrash } from 'react-icons/ci'
import { changePage } from '../../redux/slices/routeSlice'
import { selectUser } from '../../redux/slices/editUserSlice'

const UsersPage = () => {
    const [selectedUser, setSelectedUser] = useState([])
    const [selectedId, setSelectedId] = useState(0)
    const [model, setModel] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const { handleSubmit } = useForm()
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()

    const getData = (number) => {
        dispatch(UsersData({ page: number }))
    }

    const onSubmit = (values, e) => {
        dispatch(UserUpdateData({
            userId: selectedUser.userId,
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            userName: e.target[2].value,
            email: e.target[3].value,
            phoneNumber: e.target[4].value,
        }))
        dispatch(UsersData({ page: 1 }))
    }

    const deleteUser = (id) => {
        dispatch(UserDeleteData({ id: id }))
        dispatch(UsersData({ page: 1 }))
    }

    const columns = [
        {
            "title": "Id",
            "dataIndex": "userId"
        },
        {
            "title": "İsim Soyisim",
            "render": (user) => `${user.firstName} ${user.lastName}`
        },
        {
            "title": "Kullanıcı Adı",
            "dataIndex": "userName"
        },
        {
            "title": "E-Mail",
            "dataIndex": "email"
        },
        {
            "title": "Telefon",
            "dataIndex": "phoneNumber"
        },
        {
            "title": "İşlem",
            "render": (user) => {
                return (
                    <>
                        <CiEdit size={24} color="green" onClick={() => { setSelectedUser(user); setModel(!model); }} />
                        <CiGrid41 size={24} color='teal' className='ml-3' onClick={() => { dispatch(selectUser({ user: user })); dispatch(changePage({ id: 10 })) }} />
                        <CiTrash size={24} color="red" className="ml-3" onClick={() => { setSelectedId(user.userId); setIsDelete(!isDelete); }} />
                    </>
                )
            }
        }
    ]

    useEffect(() => getData(1), [])

    return (
        <Row className='w-100 mt-3 pl-4'>
            <h4 className='pl-4'>Kullanıcılar</h4>
            <Col md={12} className='w-100 mt-2'>
                <Table
                    bordered
                    dataSource={selector.users.users}
                    columns={columns}
                />
            </Col>

            <Modal isOpen={model} toggle={() => setModel(!model)}>
                <ModalHeader tag={'h4'} toggle={() => setModel(!model)}>Kullanıcı Düzenle</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <Input placeholder='İsim' defaultValue={selectedUser.firstName ?? ""} />
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder='Soyisim' defaultValue={selectedUser.lastName ?? ""} />
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder='Kullanıcı Adı' defaultValue={selectedUser.userName ?? ""} />
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder='E-Mail' defaultValue={selectedUser.email ?? ""} />
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder='Telefon' defaultValue={selectedUser.phoneNumber ?? ""} />
                        </FormGroup>
                        <Button color='warning'>Düzenle</Button>
                    </Form>
                </ModalBody>
            </Modal>

            <Modal isOpen={isDelete} toggle={() => setIsDelete(!isDelete)} className='modal-dialog-centered'>
                <ModalHeader tag={'h4'} toggle={() => setIsDelete(!isDelete)}>Kullanıcı Sil</ModalHeader>
                <ModalBody>
                    <div><Label>Kullanıcıyı silmek istediğinize emin misiniz?</Label></div>
                    <div className='mt-3 d-flex justify-content-end'>
                        <Button className='mr-3' color='primary' onClick={() => setIsDelete(!isDelete)}>Hayır</Button>
                        <Button color='danger' onClick={() => deleteUser(selectedId)}>Evet</Button>
                    </div>
                </ModalBody>
            </Modal>
        </Row>
    )
}

export default UsersPage