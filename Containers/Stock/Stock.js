import React, { Component } from 'react';
import { StyleSheet, View,Image,Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Cell, Col, Cols } from 'react-native-table-component';
import styles from './StockStyle'

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Product', 'Colour', 'Current Stock', 'Min. Stock Maintained'],
            tableData: [
                ['Optima', 'Black', '10', '10'],
                ['Photon', 'Black', '10', '10'],
                ['NYXLI', 'Red', '10', '8'],
                ['Dash', 'Black', '10', '10'],
                ['Zion', 'White', '26', '25'],
                ['Artia', 'Black', '10', '5'],
            ],
            tableData1: [
                ['      Total ', ' ', '76', '68']
            ],
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer1}>
                    <Image
                        style={styles.image}
                        source={require('../../Assets/Images/stockkkkk.png')}
                    />
                    <Text style={styles.imageText}>STOCK</Text>
                </View>
                <View style={styles.innerContainer2}>
                <Table style={styles.tableStyle}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    <Rows data={state.tableData} textStyle={styles.text1} />
                    <Rows data={state.tableData1} style={styles.bottom} textStyle={styles.text2} />
                </Table>
                </View>
            </View>
        )
    }

}

export default Stock