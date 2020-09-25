'use strict';

import React from 'react';


import {
    ViroARScene,
    ViroAmbientLight,
    Viro360Image,
    Viro360Video,
    ViroPortal,
    ViroPortalScene,
    Viro3DObject,
} from 'react-viro';

var createReactClass = require('create-react-class');
var MainScene = createReactClass({

    render: function () {
        return (
            <ViroARScene>
                <ViroAmbientLight color="#ffffff" intensity={200} />
                <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => { }}>
                    <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
                        <Viro3DObject source={require('./portal_res/portal_ship/portal_ship.vrx')}
                            resources={[require('./portal_res/portal_ship/portal_ship_diffuse.png'),
                            require('./portal_res/portal_ship/portal_ship_normal.png'),
                            require('./portal_res/portal_ship/portal_ship_specular.png')]}
                            type="VRX" />
                    </ViroPortal>
                    <Viro360Video
                        source={require("./portal_res/maldives_360.mp4")}
                        onFinish={this._onFinish}
                        onUpdateTime={this._onUpdateTime}
                        onError={this._videoError}
                        loop={true}
                        paused={false}
                        volume={1.0} />
                </ViroPortalScene>
            </ViroARScene>
        );
    },
});

module.exports = MainScene;