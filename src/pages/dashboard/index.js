import React, { useEffect } from 'react'
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDispatch, useSelector } from 'react-redux';
import { AppInfosData, AppInfoUpdateData } from '../../services';
import { useForm } from 'react-hook-form';

const Dashboard = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.appInfos.appInfo)
    const { handleSubmit } = useForm()

    useEffect(() => { dispatch(AppInfosData()) }, [])

    return (
        <Container className='mt-4'>
            {
                selector === null || selector === undefined ?
                    null
                    : selector.map((item, index) => {
                        let content = ""

                        const onSubmit = (values, e) => {
                            dispatch(AppInfoUpdateData({
                                id: item.infoId,
                                infoContentId: item.infoId,
                                infoTitle: e.target[0].value,
                                infoContent: content
                            }))
                            dispatch(AppInfosData())
                        }

                        return (
                            <Card className='mb-4' key={index}>
                                <CardHeader tag={'h4'} className=''>{item.infoTitle}</CardHeader>
                                <CardBody>
                                    <Form onSubmit={handleSubmit(onSubmit)}>
                                        <FormGroup>
                                            <Label>İçerik Başlık</Label>
                                            <Input type='text' defaultValue={item.infoTitle} />
                                        </FormGroup>

                                        <FormGroup>
                                            <Label>İçerik</Label>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={item.infoContent}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData()
                                                    content = data
                                                    console.log({ event, editor, data })
                                                }}
                                            />
                                        </FormGroup>
                                        <Container className='mt-3 d-flex justify-content-end'>
                                            <Button color='warning'>Güncelle</Button>
                                        </Container>
                                    </Form>
                                </CardBody>
                            </Card>
                        )
                    })
            }
        </Container>
    )
}

export default Dashboard