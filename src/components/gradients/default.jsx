import { useRef, useEffect } from "react"

// simple gradient just interpolated linearly
export default function Default({ from, to, rectAmount }) {
    const canvasRef = useRef(null)

    useEffect(() => {
        // get canvas and ctx
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")

        // setup canvas size to match "w-full h-full"
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        // calculate rectangle width off of how many and the width
        const rectWidth = canvas.offsetWidth / rectAmount

        // loop and generate each rect to build a gradient
        for (let i = 1; i < rectAmount; i++) {
            let r = from.r + (((to.r - from.r) / rectAmount) * i)
            let g = from.g + (((to.g - from.g) / rectAmount) * i)
            let b = from.b + (((to.b - from.b) / rectAmount) * i)

            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
            ctx.fillRect(i * rectWidth, 0, (i + 1) * rectWidth, 500)
        }
    }, [from, to])

    return (
        <div className="bg-zinc-800 border-zinc-700 border rounded-xl p-2 w-full h-32">
            <canvas ref={canvasRef} className="rounded-md shadow-md bg-black w-full h-full"></canvas>
        </div>
    )
}