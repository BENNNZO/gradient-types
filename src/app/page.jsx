"use client"

import { useState } from "react"

import Linear from "@/components/gradients/Linear"
import Offset from "@/components/gradients/Offset"

export default function Home() {
	const rectAmount = 500

	const [from, setFrom] = useState({ r: 240, g: 0, b: 25 })
	const [to, setTo] = useState({ r: 121, g: 10, b: 245 })
	// const [from, setFrom] = useState({ r: 255, g: 255, b: 255 })
	// const [to, setTo] = useState({ r: 0, g: 0, b: 0 })

	function hexToRgb(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

	return (
		<div className="bg-zinc-950 min-h-screen p-2 text-white flex flex-col gap-2">
			{/* <p>{JSON.stringify(from, null, 4)}</p> */}
			{/* <p>{JSON.stringify(to, null, 4)}</p> */}

			<input type="color" onChange={e => setFrom(hexToRgb(e.target.value))} />
			<input type="color" onChange={e => setTo(hexToRgb(e.target.value))} />

			<Linear from={from} to={to} rectAmount={rectAmount} title="Linear" />
			<Offset from={from} to={to} rectAmount={rectAmount} title="Offset" />
		</div>
	);
}
