import { DefaultOverlayContent } from '../../components/DefaultOverlayContent';
import { ModelSection } from '../../components/ModelSection';
import { ModelsWrapper } from '../../components/ModelsWrapper';
import { UniqueOverlay } from '../../components/UniqueOverlay';
import { ModelsProvider } from '../../shared/contexts/ModelsContext';
import { Container, Spacer } from './styles';

export const Home = () => {
  return (
    <Container>
      <ModelsProvider>
        <ModelsWrapper>
          <div>
            {[
              'Model One',
              'Model Two',
              'Model Three',
              'Model Four',
              'Model Five',
              'Model Six',
              'Model Seven',
            ].map((modelName) => (
              <ModelSection
                key={modelName}
                className="colored"
                modelName={modelName}
                overlayNode={
                  <DefaultOverlayContent
                    label={modelName}
                    description="Order Online for Delivery"
                  />
                }
              />
            ))}
          </div>

          <Spacer />

          <UniqueOverlay />
        </ModelsWrapper>
      </ModelsProvider>
    </Container>
  );
};
