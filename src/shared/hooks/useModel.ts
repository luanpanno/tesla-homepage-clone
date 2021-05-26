import { useCallback, useEffect } from 'react';

import { useModels } from '../contexts/ModelsContext';

export const useModel = (modelName: string) => {
  const { registerModel, unregisterModel, getModelByName } = useModels();

  useEffect(() => {
    return () => unregisterModel(modelName);
  }, [unregisterModel, modelName]);

  const getModel = useCallback(
    () => getModelByName(modelName),
    [getModelByName, modelName]
  );

  return {
    registerModel,
    getModel,
  };
};
