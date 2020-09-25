'use strict';

import React, { Component } from 'react';


import {
    ViroARScene,
    ViroConstants,
    ViroARImageMarker,
    ViroARTrackingTargets,

    ViroAmbientLight,
    Viro3DObject
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {
    constructor() {
        super();

        ViroARTrackingTargets.createTargets({
            "targetOne": {
                source: require('./res/mulher.jpg'),
                orientation: "Up",
                physicalWidth: 0.1
            },
        });
        this.state = {
            paused: false
        };

        this._onInitialized = this._onInitialized.bind(this);

    }

    render() {
        return (
            <ViroARScene onTrackingUpdated={this._onInitialized} >
                <ViroAmbientLight color="#ffffff" />
                <ViroARImageMarker target={"targetOne"} viro>
                    <Viro3DObject source={require('./res/trex_nao.glb')}
                        position={[0.0, 0.0, -10]}
                        scale={[0.1, 0.1, 0.1]}
                        type="GLB"
                    />
                </ViroARImageMarker>

            </ViroARScene>


        );
    }

    _onInitialized(state, reason) {
        if (state == ViroConstants.TRACKING_NORMAL) {
            /* setTimeout(() => {
               this.setState({
                 paused: !(this.state.paused)
               });
             }, 5000)*/
        } else if (state == ViroConstants.TRACKING_NONE) {
            this.setState({
                paused: true
            });
        }
    }
}


module.exports = HelloWorldSceneAR;
