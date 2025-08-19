import { Box, Button, Flex, Grid } from "@chakra-ui/react";


export default function Home() {
    return (
        <div style={{ background: "#e7df03", minHeight: "100vh", margin: 0 }}>
            <Box background={"#e7df03"} p="5"></Box>
            <Box background={"#fe5724"} mx="15vh" mb="10" p="5" color="#e7df03" borderColor="black" borderWidth="1px">
                <center>
                    <p style={{
                        fontSize: "5vw",
                        fontFamily: "Open Sans, sans-serif",
                        fontStyle: "italic",
                        color: "#e7df03",
                        WebkitTextStroke: ".2vw black",
                    }}>
                        B'WAY RUSH CHECKER
                    </p>
                </center>
            </Box>
            <text>
                <Grid templateColumns="repeat(2, 1fr)" gap={10}>
                    <Box ml="15vh">
                        <Box borderColor="black" fontWeight="900" borderTopRadius="md" background="#f35423" px="5" py="2" color="#e7df03" borderTopWidth="1px" borderLeftWidth="1px" borderRightWidth="1px"><text>WHAT IS IT?</text></Box>
                        <Box borderColor="black" borderWidth="1px" borderBottomRadius="md" background="white" p="5">
                            <text>Stay on top of the latest Broadway rush ticket updates with ease. My site automatically tracks rush, digital lottery, and discount ticket offerings across shows. Whenever a new deal or change appears, the site instantly sends a Slack notification so you never miss an opportunity. Whether it’s a brand-new student rush, a price drop, or an upcoming preview, B’way Rush Checker keeps you in the loop—so you can spend less time refreshing pages and more time at the theater.</text>
                        </Box>
                    </Box>
                    <Grid templateRows="repeat(2, 1fr)" mr="15vh">
                        <center>
                            <Button
                                asChild
                                borderColor="black"
                                w="125px"
                                fontSize="17"
                                background="#f35423"
                                color="#e7df03"
                                _hover={{ bg: "#fe5724", borderWidth: "2px" }}
                                borderWidth=".5px">
                                <a href="https://bwayrush.com/">VIEW SITE</a>
                            </Button>
                        </center>
                        <center>
                            <Button
                                asChild
                                borderColor="black"
                                w="125px"
                                fontSize="17"
                                background="#f35423"
                                color="#e7df03"
                                _hover={{ bg: "#fe5724", borderWidth: "2px" }}
                                borderWidth=".5px">
                                <a href="https://notify-me-network.slack.com/archives/C085NHMTFC5">JOIN SLACK</a>
                            </Button>
                        </center>
                    </Grid>
                </Grid>
            </text>
        </div>
    );
}