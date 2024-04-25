import React, { useState } from 'react'
import { Button, Container, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { CiBoxes, CiCamera, CiFacebook, CiGrid32, CiHome, CiLogout, CiMenuBurger, CiUser, CiYoutube } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/slices/routeSlice';

const LeftMenu = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const [modal, setModal] = useState(false)
    const id = selector.route.id

    return (
        <Container className='leftmenu'>
            <h3>💼 North Panel</h3>
            <Container className='mt-3 cc px-0'>
                <Label className='text-secondary'>Yönetim</Label>
                <Container className='px-0'>
                    <div className={id === 0 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 0 }))}><CiHome className='ml-2' /><span className='mt-1 ml-2 w-100'>Dashboard</span></div>
                    <div className={id === 1 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 1 }))}><CiMenuBurger className='ml-2' /> <span className='mt-1 ml-2 w-100'>Menü Yönetimi</span></div>
                    <div className={id === 2 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 2 }))}><CiCamera className='ml-2' /><span className='mt-1 ml-2 w-100'>Fotoğraf Galerisi</span></div>
                    <div className={id === 3 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 3 }))}><CiYoutube className='ml-2' /><span className='mt-1 ml-2 w-100'>Video Galerisi</span></div>
                    <div className={id === 4 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 4 }))}><CiBoxes className='ml-2' /><span className='mt-1 ml-2 w-100'>Kategori Yönetimi</span></div>
                    <div className={id === 5 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 5 }))}><CiGrid32 className='ml-2' /><span className='mt-1 ml-2 w-100'>Ürün Yönetimi</span></div>
                    <div className={id === 6 || id === 10 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 6 }))}><CiUser className='ml-2' /><span className='mt-1 ml-2 w-100'>Kullanıcı Yönetimi</span></div>
                </Container>
                <Label className='mt-5 text-secondary'>Genel Ayarlar</Label>
                <Container className='px-0'>
                    <div className={id === 7 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 7 }))}><CiUser className='ml-2' /><span className='mt-1 ml-2 w-100'>Kullanıcı Ayarları</span></div>
                    <div className={id === 8 ? 'shadoww click' : 'shadoww'} onClick={() => dispatch(changePage({ id: 8 }))}><CiFacebook className='ml-2' /><span className='mt-1 ml-2 w-100'>Sosyal Medya Yönetimi</span></div>
                    <div className={id === 9 ? 'shadoww click' : 'shadoww'} onClick={() => setModal(!modal)}><CiLogout className='ml-2' /><span className='mt-1 ml-2 w-100'>Çıkış Yap</span></div>
                </Container>
                <Container className='mt-5 text-center text-secondary'>
                    <div><Label>Poyraz Yazılım</Label></div>
                    <div style={{ marginTop: -7 }}><Label>2024</Label></div>
                    <div style={{ marginTop: -7 }}><Label>Tüm Hakları Saklıdır.</Label></div>
                </Container>
            </Container>

            <Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
                <ModalHeader tag={'h4'} toggle={() => setModal(!modal)}>Çıkış Yap</ModalHeader>
                <ModalBody>
                    <div><Label>Çıkış yapmak istediğinize emin misiniz?</Label></div>
                    <div className='d-flex justify-content-end'>
                        <Button color='primary' onClick={() => setModal(!modal)} className='mr-3'>Hayır</Button>
                        <Button color='danger' onClick={() => { setModal(!modal); dispatch(changePage({ id: 9 })); }}>Evet</Button>
                    </div>
                </ModalBody>
            </Modal>
        </Container>
    )
}

export default LeftMenu