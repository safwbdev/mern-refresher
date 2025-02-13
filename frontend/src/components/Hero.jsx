import React from 'react'
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className=' py-5'>
            <Container className='d-flex justify-content-center'>
                <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                    <h1 className='text-center mb-4'>MERN Refresher</h1>
                    <p className='text-center mb-4'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis laborum aspernatur labore, et, iusto nam optio velit sed tempora nesciunt commodi vel dolor, sit fugiat aliquid hic unde voluptas?
                    </p>
                    <div className='d-flex'>
                        <Link to={'/login'}>
                            <Button variant='primary' className='me-3'>
                                Sign In
                            </Button>
                        </Link>
                        <Link to={'/register'}>
                            <Button variant='secondary' >
                                Register
                            </Button>
                        </Link>
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default Hero