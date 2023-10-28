import {
    ScrollControls,
    Stage,
    Text,
    Html,
    ContactShadows,
    PresentationControls,
    Float,
    Environment,
    useGLTF,
} from "@react-three/drei";

export default function Experience() {
    const computer = useGLTF(
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
    );
    const HandleClick = () => {
        window.open("./", "_blank");
        console.log(window.location.search);
    };
    return (
        <>
            <Stage
                adjustCamera={true}

                contactShadow={{ opacity: 1.5, blur: 5 }}
                // environment="sunset"
                intensity={3}
            >
                <color args={["#695b5b"]} attach="background" />

                <Environment preset="city" />

                <PresentationControls
                    global
                    rotation={[0.13, 0.1, 0]}
                    polar={[-0.4, 0.2]}
                    azimuth={[-1, 0.75]}
                    config={{ mass: 2, tension: 400 }}
                    snap={{ mass: 4, tension: 400 }}
                >
                    <Float rotationIntensity={0.4}>
                        <rectAreaLight
                            width={2.5}
                            height={1.65}
                            intensity={65}
                            color={"#ff6900"}
                            rotation={[-0.1, Math.PI, 0]}
                            position={[0, 0.55, -1.15]}
                        />
                        {/* <ScrollControls pages={3} damping={0.25}> */}

                        <primitive
                            object={computer.scene}
                            position-y={-1.2}
                        // rotation-x={ 0.13 }
                        >
                            <Html
                                transform
                                wrapperClass="htmlScreen"
                                distanceFactor={1.17}
                                position={[-1.47, 2.5, -1.7]}
                                rotation-x={-0.256}
                            >
                                <iframe src="./" onClick={HandleClick} />
                            </Html>
                        </primitive>

                        <Text
                            castShadow
                            font="./bangers-v20-latin-regular.woff"
                            fontSize={1}
                            position={[1.9, 0.75, 1.75]}
                            rotation-y={-1.25}
                            maxWidth={2}
                            textAlign="center"
                            onClick={HandleClick}
                            color={"white"}
                        >
                            Code-Catalysts
                        </Text>
                        {/* </ScrollControls> */}
                    </Float>
                </PresentationControls>

                <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
            </Stage>
        </>
    );
}