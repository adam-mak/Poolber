import { Button, Pressable, StyleSheet, Text, View, Image, TextInput } from "react-native";

const MakeAccount = () => {
  return (

    
    <View style={styles.info}>
     <Text> Username: </Text>
     <TextInput
        style={styles.input}
     />
     <Text> Password: </Text>
     <TextInput
        style={styles.input}
     />
     <Text> Full name: </Text>
     <TextInput
        style={styles.input}
     />
     <Text> Phone Number: </Text>
     <TextInput
        style={styles.input}
     />
     <Text> Email: </Text>
     <TextInput
        style={styles.input}
     />
     <View style = {styles.createAccountContainer}>
        <Button title="Create Account"/>
     </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  info:{
    marginTop: 50,
  
  },
  createAccountContainer:{
  
  },
  input:{
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
},
});

export default MakeAccount;
