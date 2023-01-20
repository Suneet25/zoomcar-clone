import React, { useState } from 'react'
import PAYMENT from "../Payment/Payment.module.css"
import { Avatar, Box, Card, CardHeader, Flex, Heading, Text } from "@chakra-ui/react"
import Active from './Active'
import Wallet from './Wallet'
import Banking from './Banking'
import Credit from './Credit'







const Payment = () => {
    // const [pageData, setpageData] = useState(<Active />)
    const [pageTrue, setpageTrue] = useState(false)
    // const [pageTrue2, setpageTrue2] = useState(false)

    const handleChange = () => {
        setpageTrue(true)
    }

    // console.log("value", value)
    // console.log("Wallet", Wallet)
    // const handleChange2 = () => {
    //     setpageTrue2(true)
    // }

    return (
        <div className={PAYMENT.payDiv} >
            <div id="first">
                <div>
                    <h1>PAYMENT OPTIONS</h1>

                    <Card maxW='md' bg={"white"} color={"black"} marginTop={"10px"} onClick={handleChange} >
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name='UPI' src='https://zoomcar-assets.zoomcar.com/images/original/9fcb8335a89265849f23225858489f2a9ce8e121.png?1584453574' />

                                    <Box>
                                        <Heading size='sm'>UPI</Heading>
                                        <Text class="text">Google Pay, PhonePe, UPI</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </CardHeader>
                    </Card>

                    <Card maxW='md' bg={"white"} color={"black"} marginTop={"10px"} onClick={handleChange}>
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name='UPI' src='https://zoomcar-assets.zoomcar.com/images/original/97f051d76793fffe5ab182ffa58b8eb47c5ba0cf.png?1584453494' />

                                    <Box>
                                        <Heading size='sm'>Credit / Debit / ATM Card</Heading>
                                        {/* <Text> major cards are supported</Text> */}
                                    </Box>
                                </Flex>
                            </Flex>
                        </CardHeader>
                    </Card>

                    <Card maxW='md' bg={"white"} color={"black"} marginTop={"10px"} onClick={handleChange}>
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name='Mobile Wallet' src='https://zoomcar-assets.zoomcar.com/images/original/1317404625e385185d23ea43a0c34569d6432d09.png?1632130014' />

                                    <Box>
                                        <Heading size='sm'>Mobile Wallet</Heading>
                                        {/* <Text>All major wallets are supported</Text> */}
                                    </Box>
                                </Flex>
                            </Flex>
                        </CardHeader>
                    </Card>

                    <Card maxW='md' bg={"white"} color={"black"} marginTop={"10px"} onClick={handleChange}>
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name='Net Banking' src='https://zoomcar-assets.zoomcar.com/images/original/4dd051886e5403aafb9725b7d2ab42c80f9b1df6.png?1584453529' />

                                    <Box>
                                        <Heading size='sm'>Net Banking</Heading>
                                        {/* <Text>All major banks are supported</Text> */}
                                    </Box>
                                </Flex>
                            </Flex>
                        </CardHeader>
                    </Card>
                </div>

                {/* second div starts here */}


                {

                    (pageTrue == true) ? (<Active />) : (pageTrue == true) ? (<Credit />) : (pageTrue == true) ? (<Banking />) : (<Wallet />)
                    // (pageTrue == true) ? (<Credit />) : (<Active />)
                    //     (pageTrue2 == true) ? (<Banking />) : (<Wallet />)

                }
                {/* {pageData.map((el) => {
                    return pageData
                })} */}
                {/* <Wallet/> */}
                {/* <Banking/> */}
                {/* <Credit/> */}

                {/* end here */}



            </div>


            <div id="second">
                <h1>car details box</h1>
            </div>


        </div>
    )
}

export default Payment