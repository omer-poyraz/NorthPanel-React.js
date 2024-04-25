import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import direction from '../direction'
import { Button, Card, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import directionText from '../direction/directionText'
import { CiEdit, CiLogout, CiUser } from 'react-icons/ci'
import { changePage } from '../../redux/slices/routeSlice'

const Content = () => {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [exit, setExit] = useState(false)

    return (
        <div>
            <Card className='header'>
                <div className='d-flex justify-content-between'>
                    <div><h4 className='ml-4 mt-1'>{selector.route.id === 10 ? `${selector.editUser.user.firstName} ${selector.editUser.user.lastName}` : directionText[selector.route.id]}</h4></div>
                    <div className='profile' onClick={() => setModal(!modal)}>
                        <CiUser size={24} />
                        <Label className='mt-2'>Ömer Poyraz</Label>
                    </div>
                </div>
                {modal ?
                    <Card className='menu shadow'>
                        <div onClick={() => { dispatch(changePage({ id: 7 })); setModal(!modal) }}><CiEdit size={20} color='black' className='ml-2' /><Label className='text-dark mt-2 ml-2'>Profili Düzenle</Label></div>
                        <div onClick={() => { setExit(!exit) }}><CiLogout size={20} color='black' className='ml-2' /><Label className='text-dark mt-2 ml-2'>Çıkış Yap</Label></div>
                    </Card>
                    : null}
            </Card>
            {
                direction[selector.route.id]
            }

            <Modal isOpen={exit} toggle={() => setExit(!exit)} className='modal-dialog-centered'>
                <ModalHeader tag={'h4'} toggle={() => { setExit(!exit); setModal(!modal); }}>Çıkış Yap</ModalHeader>
                <ModalBody>
                    <div><Label>Çıkış yapmak istediğinize emin misiniz?</Label></div>
                    <div className='d-flex justify-content-end'>
                        <Button color='primary' onClick={() => { setExit(!exit); setModal(!modal) }} className='mr-3'>Hayır</Button>
                        <Button color='danger' onClick={() => { setExit(!exit); setModal(!modal); dispatch(changePage({ id: 9 })); }}>Evet</Button>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Content