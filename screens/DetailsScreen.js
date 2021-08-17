import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Card } from "react-native-elements";
import axios from "axios";
export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {},
            url: `http://localhost:5000/star?name=${this.props.navigation.getParam("star_name")}`
        };
    }

    getDetails = () => {
        const { url } = this.state;
        axios
            .get(url)
            .then(response => {
                this.setDetails(response.data);
            })
            .catch(error => {
                alert(error.message);
            });
    };

    setDetails = (starDetails) => {
        this.setState({
            details: starDetails
        });
    };

    componentDidMount() {
        this.getDetails();
    }

    render() {
        const { details, imagePath } = this.state;
        var star_data = details.data

        if (star_data) {
            return (
                <View style={styles.container}>
                    <Card
                        title={star_data.name}
                    >
                        <View>
                            <Text
                                style={styles.cardItem}
                            >{`Distance from Earth : ${star_data.distance}`}</Text>
                            <Text
                                style={styles.cardItem}
                            >{`Star Mass : ${star_data.mass}`}</Text>
                            <Text
                                style={styles.cardItem}
                            >{`Star Radius : ${star_data.radius}`}</Text>
                            <Text
                                style={styles.cardItem}
                            >{`Gravity : ${star_data.star_gravity}`}</Text>
                        </View>
                    </Card>
                </View>
            );
        }
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCE4EC'
    },
    cardItem: {
        marginBottom: 10,
        color: '#1A237E'
    }
});