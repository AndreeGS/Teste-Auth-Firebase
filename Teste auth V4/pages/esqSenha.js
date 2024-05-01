import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const Forgot_password = () => {



  return (
    <View>
      <View style={styles.top}>
        <Image style={styles.logo} source={require('../assets/forget_password_image.png')} />
      </View>

      <View style={styles.mid}>
        <View style={styles.mid_one}>
          <Text style={styles.text_one}>Recuperar minha senha</Text>
        </View>
        <View style={styles.mid_two}>
          <Text>
            Esqueceu sua senha? Não se preocupe.{"\n"}É só nos dizer seu e-mail que enviaremos um código de acesso para você cadastrar sua nova senha.
          </Text>
        </View>

        <View style={styles.mid_three}>
          <TextInput style={styles.input} placeholder="Digite seu e-mail" />
        </View>
      </View>

      <View style={styles.bot}>
        <TouchableOpacity style={[styles.button, { width: '70%' }]}>
          <Text style={{ color: '#fff', fontWeight:'bold', fontSize:23 }}>Enviar código</Text>
        </TouchableOpacity>
        <View style={{display:'flex', flexDirection:'row'}}>
          <Text>Novo membro ?</Text>
          <Text style={{fontWeight:'bold'}}>  Registrar-se</Text>
        </View>
      </View>
    </View>
  );
}
export default Forgot_password;
