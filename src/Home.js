import { Box, Button, Flex, Grid } from "@chakra-ui/react";


export default function Home() {
    return (
        <div style={{background:"#e7df03", minHeight:"100vh", margin: 0}}>
            <Box background={"#e7df03"} p="5"></Box>
            <Box background={"#fe5724"} mx="15vh" mb="10" p="5" color="#e7df03">
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
                <Box background="#f35423" ml="10">hi</Box>
                <Grid templateRows="repeat(2, 1fr)" gap={10}>
                    <center>
                <Button w="125px" fontSize= "17" background="#f35423" color="#e7df03" textDecoration="black" _hover={{ bg: "#fe5724" }}>VIEW SITE</Button>
                </center>
                <center>
                <Button w="125px" fontSize= "17" background="#f35423" color="#e7df03" textDecoration="black" _hover={{ bg: "#fe5724" }}>JOIN SLACK</Button>
                </center>
                </Grid>
            </Grid>
            </text>
        </div>
    );
}