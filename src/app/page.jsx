"use client"

import { useState } from "react"

import Default from "@/components/gradients/default"

export default function Home() {
	const [from, setFrom] = useState([255, 255, 255])
	const [to, setTo] = useState([0, 0, 0])

	return (
		<div>
			Hello, World!
			<Default from={from} to={to} />
		</div>
	);
}
