import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { CategoriesData, CategoryDeleteData } from '../../services'
import { Table } from 'antd'
import { CiEdit, CiTrash } from 'react-icons/ci'
import { useForm } from 'react-hook-form'

const CategoryPage = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.categories.categories)
    const { handleSubmit } = useForm()
    const [selectedId, setSelectedId] = useState(0)
    const [createModal, setCreateModal] = useState(false)
    const [modal, setModal] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [selectedCat, setSelectedCat] = useState([])

    useEffect(() => { dispatch(CategoriesData({ page: 1 })) }, [])

    const columns = [
        {
            "title": "Resim",
            "render": (cat) => {
                return (
                    <img src={cat.categoryImg} alt='' height={20} />
                )
            },
            "width": "15%"
        },
        {
            "title": "Id",
            "dataIndex": "categoryId",
            "width": "15%"
        },
        {
            "title": "Kategori Adı",
            "dataIndex": "categoryName",
            "width": "55%"
        },
        {
            "title": "İşlem",
            "render": (cat) => {
                return (
                    <>
                        <CiEdit size={24} color='green' onClick={() => { setSelectedCat(cat); setModal(!modal); }} />
                        <CiTrash size={24} color='red' className='ml-4' onClick={() => { setSelectedId(cat.categoryId); setIsDelete(!isDelete); }} />
                    </>
                )
            },
            "width": "15%"
        }
    ]

    const onSubmit = (values, e) => {
        console.log(e)
        
    }

    return (
        <Container className='mt-4'>
            <Container className='d-flex justify-content-end'>
                <Button color='success'>Kategori Ekle</Button>
            </Container>
            <Card className='mt-4'>
                <CardHeader tag={'h4'}>Kategoriler</CardHeader>
                <CardBody>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={selector}
                    />
                </CardBody>
            </Card>

            <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader tag={'h4'} toggle={() => setModal(!modal)}>Kategori Düzenle</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <Label>Kategori Adı</Label>
                            <Input type='text' defaultValue={selectedCat === null || selectedCat === undefined ? "" : selectedCat.categoryName} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Kategori Resmi</Label>
                            <div className='mb-3'>
                                <img src={selectedCat.categoryImg} height={20} />
                            </div>
                            <Input type='file' />
                        </FormGroup>
                        <Container className='mt-3 d-flex justify-content-end'>
                            <Button color='warning'>Güncelle</Button>
                        </Container>
                    </Form>
                </ModalBody>
            </Modal>

            <Modal isOpen={isDelete} toggle={() => setIsDelete(!isDelete)} className='modal-dialog-centered'>
                <ModalHeader tag={'h4'} toggle={() => setIsDelete(!isDelete)}>Kategori Sil</ModalHeader>
                <ModalBody>
                    <div><Label>Kategoriyi silmek istediğinize emin misiniz?</Label></div>
                    <div className='mt-3 d-flex justify-content-end'>
                        <Button className='mr-3' color='primary' onClick={() => setIsDelete(!isDelete)}>Hayır</Button>
                        <Button color='danger' onClick={() => dispatch(CategoryDeleteData({ id: selectedId }))}>Evet</Button>
                    </div>
                </ModalBody>
            </Modal>
        </Container>
    )
}

export default CategoryPage