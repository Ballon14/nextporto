"use client"

import { Canvas } from "@react-three/fiber"
import { useRef, useMemo } from "react"

function Stars({ count = 120 }) {
    const mesh = useRef()
    const positions = useMemo(() => {
        const arr = []
        for (let i = 0; i < count; i++) {
            arr.push(
                (Math.random() - 0.5) * 10, // x
                (Math.random() - 0.5) * 10, // y
                -Math.random() * 10 // z
            )
        }
        return new Float32Array(arr)
    }, [count])

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#00ff99"
                size={0.08}
                sizeAttenuation
                transparent
                opacity={0.7}
            />
        </points>
    )
}

export default function ProgrammerBackground() {
    return (
        <Canvas
            style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
            }}
            camera={{ position: [0, 0, 1] }}
        >
            <Stars count={120} />
        </Canvas>
    )
}
