import * as React from "react";
import { View, Text, Button } from "react-native";
import Login from "../components/Login";
// import "../styles.css";

function LoginScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {/* <Login /> */}
            <Button
                // style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                title="Register"
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    );
}

export default LoginScreen;
