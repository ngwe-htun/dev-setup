import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer"
import testFont from "../../fonts/Pyidaungsu.ttf";

Font.register({
    family: 'Roboto',
    src: testFont
});

// Create styles
const styles = StyleSheet.create({
    page: {
        display: "flex",
        backgroundColor: "white",
        color: "#000000",
        fontFamily: "Roboto"
    },
    section: {
        margin: 10,
        padding: 10,
    },
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
});

const OrderPdf = ({ name, fatherName }) => (
    <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "50px", marginRight: "50px"}}>
                <View>
                    <Text>ဝယ်သူအမည်</Text>
                </View>
                <View>
                    <Text>Aung Aung</Text>
                </View>
            </View>
        </Page>
    </Document>
)

export default OrderPdf