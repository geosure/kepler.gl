// examples/demo-app/src/components/custom-side-panel.js

import React from 'react';
import styled from 'styled-components';
import { withState, SidebarFactory } from '@kepler.gl/components';
import { layerConfigChange } from '@kepler.gl/actions';
import { connect } from 'react-redux';

import { LayerToggle } from '../components/layer-toggle';

const StyledTitle = styled.div`
  color: #FFF;
  font-family: "Helvetica";
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StyledSubTitle = styled.div`
  color: #FFF;
  font-family: "Helvetica";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledSelectButton = styled.button`
  color: #22A8E0;
  font-family: "Helvetica";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function CustomSidebarFactory(...deps) {
  const SideBar = SidebarFactory(...SidebarFactory.deps);
  const CustomSideBar = (props) => {
    const { currentSample } = props;
    if (!currentSample) return null;
    console.log(props)
    console.log('*********')

    return (
      <SideBar {...props}>
        <img src='https://firebasestorage.googleapis.com/v0/b/geosure-users.appspot.com/o/geosurelogowhite.png?alt=media&token=c1795905-d90c-45c7-bfa4-0a0081b2eef5'/>
        {/* <div className="sample-map__image"> */}
          {currentSample.imageUrl && <img src={currentSample.imageUrl} />}
        {/* </div> */}
        <StyledTitle>{currentSample.label}</StyledTitle>
        <StyledSubTitle>{currentSample.description}</StyledSubTitle>
        <StyledSelectButton
          onClick={() => {
            // props.dispatch(toggleModal('addData')) // KEEP THIS

            // This will work for toggling layers on and off in the toggle component:
            if (props.layers.length) {
              const layer = props.layers[0]
              const isVisible = !layer.config.isVisible
              props.dispatch(layerConfigChange(layer, {isVisible}))
            }
          }}
        >
          Select other city
        </StyledSelectButton>
        <LayerToggle/>
        {/* TODO: toggle advanced options */}
        {/* <SideBar {...props}/> */}
      </SideBar>
    );
  };

  const mapStateToProps = (state) => ({
    // Add other props if needed
  });
  
  return connect(mapStateToProps)(withState([], state => ({...state.demo.app, layers: state.demo.keplerGl.map.visState.layers}))(CustomSideBar));
}

// export default CustomSidebarFactory;
export function replaceSideBar() {
  return [SidebarFactory, CustomSidebarFactory];
}