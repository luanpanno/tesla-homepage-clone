import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';

import { CarModel } from '../models/domain/Car';

interface Context {
  wrapperRef: React.RefObject<HTMLDivElement>;
  registeredModels: CarModel[];
  registerModel: (model: CarModel) => void;
  unregisterModel: (modelName: string) => void;
  getModelByName: (modelName: string) => CarModel | null;
}

export const ModelsContext = createContext<Context>({} as Context);

export const ModelsProvider: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels((state) => [...state, model]);
  }, []);

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels((state) =>
      state.filter((item) => item.modelName !== modelName)
    );
  }, []);

  const getModelByName = useCallback(
    (modelName: string) => {
      return (
        registeredModels.find((item) => item.modelName === modelName) || null
      );
    },
    [registeredModels]
  );

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registerModel,
        registeredModels,
        unregisterModel,
        getModelByName,
      }}
    >
      {children}
    </ModelsContext.Provider>
  );
};

export const useModels = () => useContext(ModelsContext);
