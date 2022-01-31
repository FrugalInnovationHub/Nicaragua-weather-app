import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Linking } from 'react-native'
import { Form, Button } from 'native-base'
import styles from '../Style'


export class WaterHomeAdmin extends React.Component {
    static navigationOptions = {
        title: 'WaterHomeAdmin',
    };

    state = {
        data: [],
    };

    fetchData = async() => {
        // const response = await fetch ('http://10.0.0.13:3004/reports');
        const response = await fetch('http://localhost:3004/reports').catch(error => console.log('error', error));
        const users = await response.json();
        this.setState({data: users});
        console.log(this.state.data[0].date);
    }

    componentDidMount() {
        this.fetchData();
    }

    // _inbox() {
    //     let num = this.props.navigation.state.params.phoneNumPass;
    //     UserProfile.setNumber(num);
    // }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerHome}>
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.asdenic.org')}>
                    <Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.scu.edu/engineering/labs--research/labs/frugal-innovation-hub/')}>
                    <Image source={require('../assets/frugalHub.png')} style={styles.frugalHubLogoHome}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Welcome')}>
                    <Text style={styles.logoutButton}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>

                <View style={styles.pageContent}>
                    <View style={styles.leftHeader}>
                        <Button style={styles.back}
                            onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={styles.backText}>{'<'} Atrás</Text>
                        </Button>
                    </View>

                    {/* <View style={styles.subheader}>

                        <View style={styles.rightHeader}>
                            <Button style={styles.add}
                                onPress={() => this.props.navigation.navigate('CreateNewWaterQualityReport')}>
                                <Text style={styles.addText}>+</Text>
                            </Button>
                            <Button style={styles.mail}
                                onPress={() => {this.props.navigation.navigate('InboxAdmin')}}>
                                <Image source={require('../assets/mail.png')} style={styles.mailPicture}/>
                            </Button>
                        </View>

                    </View> */}

                    {/* <TouchableOpacity style={styles.subheader}>
                        <Button style={styles.add}
                            onPress={() => this.props.navigation.navigate('CreateNewWaterQualityReport')}>
                            <Text style={styles.addText}>+</Text>
                        </Button>
                        <TouchableOpacity style={styles.rightHeader} onPress={() => {this.props.navigation.navigate('InboxAdmin')}}>
                                <Image source={require('../assets/mail.png')} style={styles.mailPicture}/>
                        </TouchableOpacity>
                    </TouchableOpacity> */}

                    <TouchableOpacity style={styles.subheader}>
                        <Button style={styles.add}
                            onPress={() => this.props.navigation.navigate('CreateNewWaterQualityReport')}>
                            <Text style={styles.addText}>+</Text>
                        </Button>
                        <TouchableOpacity style={styles.rightHeader} onPress={() => {this.props.navigation.navigate('InboxAdmin')}}>
                                <Image source={require('../assets/mail.png')} style={styles.mailPicture}/>
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <Text style={styles.waterTitle}>AGUA</Text>
                    <Form style={styles.waterForm}>
                        <Text style={styles.subTitle}>Noticias</Text>
                        <FlatList inverted data={this.state.data} 
                            getItemLayout={(data, index) => (
                                {length: 100, offset: 100 * index, index}
                            )}
                            initialScrollIndex={this.state.data.length - 1}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => 
                            <Button full rounded success style={styles.reportButton} onPress={() => this.props.navigation.navigate('ViewIndividualWaterReport',
                                                                                                        {           
                                                                                                            titlePass: item.title,
                                                                                                            messPass: item.message,
                                                                                                            datePass: item.date,
                                                                                                        })}>
                                {item.urgent
                                    ? <Image source={require('../assets/emergency.png')} style={styles.emergency}/>
                                    : <Text></Text>
                                }
                                <Text style={styles.buttonText}>{item.title} </Text>
                                <Text style={styles.dateHome}>{item.date}</Text>
                                
                            </Button>}
                        />
                    </Form>
                </View>

                <View style={styles.footer}>
                </View>

            </View>
        );
    }
}

export default WaterHomeAdmin;