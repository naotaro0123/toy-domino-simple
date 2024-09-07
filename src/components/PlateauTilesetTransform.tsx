import { createContext, ReactNode, useMemo, useState } from 'react';
import { Quaternion, Vector3 } from 'three';

export const PlateauTilesetTransformContext = createContext({
  setState: (state: { offset?: Vector3; rotation?: Quaternion }): void => {},
});

type PlateauTilesetTransformProps = {
  children: ReactNode;
};

export const PlateauTilesetTransform = ({ children }: PlateauTilesetTransformProps) => {
  const [{ offset, rotation }, setState] = useState<{
    offset?: Vector3;
    rotation?: Quaternion;
  }>({});

  const context = useMemo(() => ({ setState }), [setState]);

  return (
    <PlateauTilesetTransformContext.Provider value={context}>
      <group position={offset} quaternion={rotation}>
        {children}
      </group>
    </PlateauTilesetTransformContext.Provider>
  );
};
