// examples/demo-app/src/components/custom-side-panel.js

import React from 'react';
import styled from 'styled-components';
import { withState, SidebarFactory } from '@kepler.gl/components';
import { toggleModal } from '@kepler.gl/actions';
import { connect } from 'react-redux';

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

    return (
      <SideBar {...props}>
        <img src='https://firebasestorage.googleapis.com/v0/b/geosure-users.appspot.com/o/geosurelogowhite.png?alt=media&token=c1795905-d90c-45c7-bfa4-0a0081b2eef5'/>
        {/* <div className="sample-map__image"> */}
          {currentSample.imageUrl && <img src={currentSample.imageUrl} />}
        {/* </div> */}
        <StyledTitle>{currentSample.label}</StyledTitle>
        <StyledSubTitle>{currentSample.description}</StyledSubTitle>
        <StyledSelectButton onClick={() => props.dispatch(toggleModal('addData'))}>
          Select other city
        </StyledSelectButton>
        {/* Render other content */}
        {/* <SideBar {...props}/> */}
      </SideBar>
    );
  };

  // return withState([], state => ({...state.demo.app}))(CustomSideBar);
  const mapStateToProps = (state) => ({
    // Add other props if needed
  });
  
  return connect(mapStateToProps)(withState([], state => ({...state.demo.app}))(CustomSideBar));
}

// export default CustomSidebarFactory;
export function replaceSideBar() {
  return [SidebarFactory, CustomSidebarFactory];
}