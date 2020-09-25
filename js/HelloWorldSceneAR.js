'use strict';

import React, { Component } from 'react';


import {
  ViroARScene,
  ViroConstants,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroVideo,
  ViroMaterials,
  ViroMaterialVideo
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
        <ViroARImageMarker target={"targetOne"} viro>
          <ViroVideo
            source={{ uri: "https://storage.googleapis.com/sicredi/sicredi_low.mp4" }}
            paused={this.state.paused}
            loop={true}
            position={[0, 0, 0]}
            scale={[2, 1, 0]}
            rotation={[-90, 0, 0]}
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
