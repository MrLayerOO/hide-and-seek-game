import { Canvas } from '@react-three/fiber';
import Player from './Player/Player'
import classes from './Game.module.css'
import Plane from './Plane/Plane';
import { OrbitControls } from '@react-three/drei';                                                                                 

function Game() {
    return (
        <div className={classes.canvasContainer}>
            <Canvas flat linear>
                <OrbitControls/>
                <ambientLight/>
                <pointLight position={[10, 10, 10]}/>
                <Player position={[2, 0, 0]}/>
                <Plane/>
            </Canvas>
        </div>
    );
}

export default Game;
