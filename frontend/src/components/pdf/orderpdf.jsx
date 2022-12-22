import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#d11fb6",
        color: "white",
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
            <View style={styles.section}>
                <Text>{name}</Text>
            </View>
            <View style={styles.section}>
                <Text>{fatherName}</Text>
            </View>
        </Page>
    </Document>
)

export default OrderPdf