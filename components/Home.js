import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

export default function Home({navigation}){
    return(
        <ScrollView  style={styles.bloco}>
            <Text style={styles.texto}>PREVISÃO DO TEMPO DEFANTE </Text>
            <Image
            style={styles.img}
            source={{
                uri: 'https://classic.exame.com/wp-content/uploads/2022/11/defante.jpg?quality=70&strip=info&w=936',
            }}
            />
            <Text style={styles.texto}>Selecione a cidade de sua preferência</Text>
            
            <View>
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Mongagua")}>
                    <Text style={styles.textBtn}>MONGAGUÁ</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("SP")}>
                    <Text style={styles.textBtn}>SÃO PAULO</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Santos")}>
                    <Text style={styles.textBtn}>SANTOS</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Osasco")}>
                    <Text style={styles.textBtn}>OSASCO</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Itanhaem")}>
                    <Text style={styles.textBtn}>ITANHAÉM</Text>
                </TouchableOpacity>
                <Text style={styles.textoEnd}>© 2022 Gabriel Andrade®, Inc. Todos os direitos reservados. </Text>
            </View>
           
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bloco: {
        marginTop:30,
        
    },
    texto:{
        fontSize: 30,
        textAlign: 'center',
        color: '#FF2A2A'
    },
    textoEnd:{
        fontSize: 15,
        margin: 30,
        textAlign: 'center',
        color: '#FF2A2A'
    },
    btn: {
        backgroundColor: '#CA0000',
        marginTop: 20,
        width: '80%',
        height: 30,
        marginLeft: '10%',
        borderRadius: 5
    },
    textBtn: {
        fontSize:20,
        color: '#FFF',
        textAlign: 'center'
    },
    img: {
        width: 400,
        height: 230,
        margin: 5,
        textAlign: 'center',
        borderRadius: 20,
        alignSelf: 'center'
},
});