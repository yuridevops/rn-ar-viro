import React from 'react'
import Home from './pages/Home'
import Agendamento from './pages/Agendamento'
import Store from './pages/Store'
import AR from '../AR'
import { NativeRouter, Route } from "react-router-native";
import Stack from 'react-router-native-stack';



export default function App() {

    return (
        <NativeRouter>
            <Stack>
                <Route exact path="/" component={Home} />
                <Route exact path="/ar" component={AR} />
                <Route exact path="/store" component={Store} />
                <Route exact path="/agendamento" component={Agendamento} />
            </Stack>
        </NativeRouter>
    )
}



