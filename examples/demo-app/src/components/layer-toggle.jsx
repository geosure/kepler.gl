import React, { useState } from "react";
import styled from "styled-components";

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
export const LayerToggle = () => {
  const [toggles, setToggles] = useState({
    physicalScore: false,
    politicalViolence: true,
    pettyCrimes: false,
    sexualAssault: false,
  });

  const handleToggle = (key) => {
    setToggles((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <ToggleContainer>
      {[
        { label: "Physical Score", key: "physicalScore" },
        { label: "Political violence", key: "politicalViolence" },
        { label: "Petty crimes", key: "pettyCrimes" },
        { label: "Sexual assault", key: "sexualAssault" },
      ].map(({ label, key }) => (
        <ToggleItem key={key}>
          <ToggleLabel>{label}</ToggleLabel>
          <ToggleSwitch
            active={toggles[key]}
            onClick={() => handleToggle(key)}
          >
            <ToggleThumb active={toggles[key]} />
          </ToggleSwitch>
        </ToggleItem>
      ))}
    </ToggleContainer>
  );
};

/*
pseudo code

// from layer-panel.tsx

_toggleVisibility: MouseEventHandler = e => {
      e.stopPropagation();
      const isVisible = !this.props.layer.config.isVisible;
      this.updateLayerConfig({isVisible});
    };

updateLayerConfig = (newProp: Partial<LayerBaseConfig>) => {
      this.props.layerConfigChange(this.props.layer, newProp);
    };

    type LayerPanelProps = {
        className?: string;
        style?: CSSProperties;
        onMouseDown?: MouseEventHandler;
        onTouchStart?: TouchEventHandler;
        layer: Layer;
        datasets: Datasets;
        layerTypeOptions: {
            id: string;
            label: string;
            icon: any; //
            requireData: any; //
        }[];
        isDraggable?: boolean;
        idx: number;
        openModal: ActionHandler<typeof toggleModal>;
        layerColorUIChange: ActionHandler<typeof VisStateActions.layerColorUIChange>;
        layerConfigChange: ActionHandler<typeof VisStateActions.layerConfigChange>;
        layerVisualChannelConfigChange: ActionHandler<
            typeof VisStateActions.layerVisualChannelConfigChange
        >;
        layerSetIsValid: ActionHandler<typeof VisStateActions.layerSetIsValid>;
        layerTypeChange: ActionHandler<typeof VisStateActions.layerTypeChange>;
        layerVisConfigChange: ActionHandler<typeof VisStateActions.layerVisConfigChange>;
        layerTextLabelChange: ActionHandler<typeof VisStateActions.layerTextLabelChange>;
        removeLayer: ActionHandler<typeof VisStateActions.removeLayer>;
        zoomToLayer: ActionHandler<typeof MapStateActions.fitBounds>;
        duplicateLayer: ActionHandler<typeof VisStateActions.duplicateLayer>;
        listeners?: React.ElementType;
        };

    // see base-layer.ts
    // In theory, if I can get this.props.layer then I can call like this:
    this.props.layerConfigChange(this.props.layer, {isVisible: false});

    or....

    just dispatch action: layerConfigChange. except i dont have avvess to the layer...

*/

