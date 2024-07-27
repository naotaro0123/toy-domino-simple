type Domino = { id: string; position: [number, number, number]; color: string };
const createDomino = (domino: Domino) => {
  return (
    <mesh key={domino.id} name={domino.id} position={domino.position}>
      <boxGeometry args={[0.4, 2, 0.2]} />
      <meshStandardMaterial color={domino.color} />
    </mesh>
  );
};

const dominoSettings: Domino[] = [
  { id: '1', position: [1, 0, 4], color: 'red' },
  { id: '2', position: [2, 0, 3], color: 'blue' },
  { id: '3', position: [3, 0, 2], color: 'green' },
  { id: '4', position: [4, 0, 1], color: 'yellow' },
];

export const ToyDominoSimple = () => {
  return (
    <>
      <group>
        <directionalLight position={[5, 5, 3]} intensity={2} />
        <directionalLight position={[-5, -5, -3]} intensity={2} />
      </group>
      <mesh name="floor">
        <boxGeometry args={[10, 0.1, 10]} />
        <meshStandardMaterial color={'grey'} />
      </mesh>
      {dominoSettings.map((domino) => createDomino(domino))}
    </>
  );
};
