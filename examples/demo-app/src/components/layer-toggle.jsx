import React, { useState } from "react";
import styled from "styled-components";
import { layerConfigChange } from '@kepler.gl/actions';

// Styled-components
const ToggleContainer = styled.div`
  background-color: #1a1a1a;
  color: #e0e0e0;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const ToggleItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const ToggleLabel = styled.span`
  font-size: 16px;
`;

const ToggleSwitch = styled.div`
  width: 40px;
  height: 20px;
  background-color: ${(props) => (props.active ? "#4fc3f7" : "#333")};
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const ToggleThumb = styled.div`
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${(props) => (props.active ? "22px" : "2px")};
  transition: left 0.3s ease;
`;

// React component
export const LayerToggle = ({layers, dispatch}) => {
	// State to track the currently active toggle by its ID
  const [activeToggle, setActiveToggle] = useState(
    layers.length > 0 ? layers[0].id : null
  );

  const handleToggle = (id) => {
    // If the same toggle is clicked, deactivate it; otherwise, set it as active
    setActiveToggle(id);
		layers.forEach(layer => {
			const isVisible = layer.id === id
			dispatch(layerConfigChange(layer, {isVisible}))
		});
  };

  return (
    <ToggleContainer>
      {layers.map(({ id, config }) => (
        <ToggleItem key={id}>
          <ToggleLabel>{config.label}</ToggleLabel>
          <ToggleSwitch
            active={activeToggle === id}
            onClick={() => handleToggle(id)}
          >
            <ToggleThumb active={activeToggle === id} />
          </ToggleSwitch>
        </ToggleItem>
      ))}
    </ToggleContainer>
  );
};
