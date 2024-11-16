import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const ClearanceTagPDFPage = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Name: {formData.name}</Text>
        <Text>SKU: {formData.sku}</Text>
        {/* Add more form data fields as needed */}
      </View>
    </Page>
  </Document>
);

export default ClearanceTagPDFPage;