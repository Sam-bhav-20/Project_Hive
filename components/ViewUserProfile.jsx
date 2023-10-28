import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardTitle, Col, Container, Row, Table } from 'reactstrap'
import { getCurrentUserDetail, isLoggedIn } from '../auth'



const ViewUserProfile = ({ user, updateProfileClick }) => {


    const [currentUser, setCurrentUser] = useState(null)
    const [login, setLogin] = useState(false)
    useEffect(() => {
        setCurrentUser(getCurrentUserDetail())
        setLogin(isLoggedIn())
    }, [])
    return (
        <Card className='mt-20 mb-24 border-0 rounded-0 shadow-sm'>
            <CardBody>
                <CardTitle className='text-center'>
                <h3 className='text-uppercase mt-2'>User Information</h3>
                <Container className='text-center d-flex mt-2  justify-content-center align-items-center'>
                    <img style={{ maxWidth: '250px', maxHeight: '250px' }} src={user.image ? user.image : 'https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300&vertical=top'} alt="user profile picture" className='img-fluid  rounded-circle' />
                </Container>
                </CardTitle>
                <Table responsive striped hover bordered={true} className='text-center mt-3'>
                    <tbody>
                        <tr>
                            <td >
                                LCWDBlLOGS ID
                            </td>
                            <td>
                                LCWD{user.id}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                USER NAME
                            </td>
                            <td>
                                {user.name}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                USER EMAIL
                            </td>
                            <td>
                                {user.email}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                ROLE
                            </td>
                            <td>
                                {user.roles.map((role) => {
                                    return (
                                        <div key={role.id}>{role.name}</div>
                                    )
                                })}
                            </td>
                        </tr>
                    </tbody>
                </Table>

                

            </CardBody>
        </Card>
        
    )
}

export default ViewUserProfile