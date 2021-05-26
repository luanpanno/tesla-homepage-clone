import { useModels } from '../../shared/contexts/ModelsContext';
import { ModelOverlay } from '../ModelOverlay';
import { Container, OverlaysRoot } from './styles';

export const ModelsWrapper: React.FC = ({ children }) => {
  const { wrapperRef, registeredModels } = useModels();

  return (
    <Container ref={wrapperRef}>
      <OverlaysRoot>
        {registeredModels?.map((item) => (
          <ModelOverlay key={item.modelName} model={item}>
            {item.overlayNode}
          </ModelOverlay>
        ))}
      </OverlaysRoot>

      {children}
    </Container>
  );
};
