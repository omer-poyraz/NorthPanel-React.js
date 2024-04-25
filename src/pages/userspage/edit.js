import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { CiEdit, CiTrash } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { AddressesData, AddressUpdateData, BasketsData } from '../../services'
import { useForm } from 'react-hook-form'
import product1 from '../../images/product1.webp'

const UserEditPage = () => {
    const selector = useSelector((state) => state)
    const [addressModel, setAddressModel] = useState(false)
    const [addressModel2, setAddressModel2] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState([])
    const dispatch = useDispatch()
    const { handleSubmit } = useForm()

    useEffect(() => {
        dispatch(AddressesData({ userId: selector.editUser.user.userId }))
        dispatch(BasketsData({ userId: selector.editUser.user.userId }))
    }, [])

    const addressColumns = [
        {
            "title": "Id",
            "dataIndex": "addressId"
        },
        {
            "title": "Adres Başlık",
            "dataIndex": "addressTitle"
        },
        {
            "title": "Adres Şehir",
            "dataIndex": "addressCity"
        },
        {
            "title": "Adres İlçe",
            "dataIndex": "addressDistrict"
        },
        {
            "title": "İşlem",
            "render": (adr) => {
                return (
                    <>
                        <CiEdit size={24} color='green' onClick={() => { setSelectedAddress(adr); setAddressModel2(!addressModel2) }} />
                        <CiTrash size={24} color='red' className='ml-3' onClick={() => setAddressModel(!addressModel)} />
                    </>
                )
            }
        }
    ]

    const basketColumns = [
        {
            "title": "Resim",
            "render": (bsk) => {
                return (
                    // ${bsk.product.files[0].filesPath.replace}/${bsk.product.files[0].filesName}
                    <img src={`${product1}`} alt='' height={40} />
                )
            }
        },
        {
            "title": "Id",
            "dataIndex": "basketId"
        },
        {
            "title": "Kategori",
            "render": (bsk) => <Label>{bsk.product.category.categoryName}</Label>
        },
        {
            "title": "Ürün",
            "render": (bsk) => <Label>{bsk.product.productName}</Label>
        },
        {
            "title": "Adet",
            "dataIndex": "productLength"
        },
        {
            "title": "İşlem",
            "render": (bsk) => {
                return (
                    <>
                        <CiEdit color='green' size={24} />
                        <CiTrash color='red' size={24} className='ml-3' />
                    </>
                )
            }
        }
    ]

    const editAddress = (values, e) => {
        dispatch(AddressUpdateData({
            id: selectedAddress.addressId,
            userId: selector.editUser.user.userId,
            addressTitle: e.target[0].value,
            addressText: e.target[1].value,
            addressCity: e.target[2].value,
            addressDistrict: e.target[3].value
        }))
    }

    return (
        <Container className='mt-4'>
            <Card>
                <CardHeader tag={'h4'}>Adres Bilgileri</CardHeader>
                <CardBody>
                    <Table
                        bordered
                        columns={addressColumns}
                        dataSource={selector.addresses.addresses}
                    />
                </CardBody>
            </Card>

            <Card className='mt-4'>
                <CardHeader tag={'h4'}>Sepet Bilgileri</CardHeader>
                <CardBody>
                    <Table
                        bordered
                        columns={basketColumns}
                        dataSource={selector.baskets.baskets}
                    />
                </CardBody>
            </Card>

            <Modal isOpen={addressModel} toggle={() => setAddressModel(!addressModel)} className='modal-dialog-centered'>
                <ModalHeader tag='h4' toggle={() => setAddressModel(!addressModel)}>Adresi Sil</ModalHeader>
                <ModalBody>
                    <div><Label>Adresi silmek istediğinize emin misiniz?</Label></div>
                    <div className='d-flex justify-content-end'>
                        <Button color='primary' onClick={() => setAddressModel(!addressModel)}>Hayır</Button>
                        <Button color='danger' className='ml-3' onClick={() => { setAddressModel(!addressModel) }}>Evet</Button>
                    </div>
                </ModalBody>
            </Modal>

            <Modal isOpen={addressModel2} toggle={() => setAddressModel2(!addressModel2)} className='modal-dialog-centered'>
                <ModalHeader toggle={() => setAddressModel2(!addressModel2)} tag={'h4'}>Adres Düzenle</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit(editAddress)}>
                        <FormGroup>
                            <Label>Adres Başlık</Label>
                            <Input type='text' defaultValue={selectedAddress === null || selectedAddress === undefined ? "" : selectedAddress.addressTitle} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Adres Metin</Label>
                            <Input type='textarea' defaultValue={selectedAddress === null || selectedAddress === undefined ? "" : selectedAddress.addressText} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Adres Şehir</Label>
                            <Input type='text' defaultValue={selectedAddress === null || selectedAddress === undefined ? "" : selectedAddress.addressCity} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Adres İlçe</Label>
                            <Input type='text' defaultValue={selectedAddress === null || selectedAddress === undefined ? "" : selectedAddress.addressDistrict} />
                        </FormGroup>
                        <Container className='mt-3 d-flex justify-content-end'>
                            <Button color='warning'>Güncelle</Button>
                        </Container>
                    </Form>
                </ModalBody>
            </Modal>
        </Container>
    )
}

export default UserEditPage