<script lang="ts">
	import { Block } from "@gradio/atoms";
	import { StatusTracker } from "@gradio/statustracker";
	import { Gradio } from "@gradio/utils";

	// Types
	interface Port {
		name: string;
		history_count?: number;
	}

	interface GraphNode {
		id: string;
		name: string;
		type: string;
		inputs: Port[];
		outputs: string[];
		x: number;
		y: number;
		status: string;
		is_output_node: boolean;
		is_input_node: boolean;
	}

	interface GraphEdge {
		id: string;
		from_node: string;
		from_port: string;
		to_node: string;
		to_port: string;
	}

	interface CanvasData {
		name: string;
		nodes: GraphNode[];
		edges: GraphEdge[];
		run_to_node?: string;
	}

	interface CanvasEvents {
		change: CanvasData;
	}

	interface CanvasProps {
		value: CanvasData;
		height: number | string | undefined;
	}

	let props = $props();
	const gradio = new Gradio<CanvasEvents, CanvasProps>(props);

	// Canvas state
	let canvasRef: HTMLDivElement;
	let transform = $state({ x: 50, y: 50, scale: 1 });
	let isPanning = $state(false);
	let startPan = $state({ x: 0, y: 0 });

	// Derived data
	let graphName = $derived(gradio.props.value?.name || "daggr workflow");
	let nodes = $derived(gradio.props.value?.nodes || []);
	let edges = $derived(gradio.props.value?.edges || []);

	// Node dimensions (fixed for now)
	const NODE_WIDTH = 280;
	const NODE_MIN_HEIGHT = 120;
	const PORT_HEIGHT = 24;
	const HEADER_HEIGHT = 48;

	// Calculate node height based on ports
	function getNodeHeight(node: GraphNode): number {
		const portCount = Math.max(node.inputs.length, node.outputs.length);
		return HEADER_HEIGHT + Math.max(portCount * PORT_HEIGHT + 40, NODE_MIN_HEIGHT - HEADER_HEIGHT);
	}

	// Get port Y position within node
	function getPortY(portIndex: number, totalPorts: number, nodeHeight: number): number {
		const bodyStart = HEADER_HEIGHT + 16;
		const bodyHeight = nodeHeight - HEADER_HEIGHT - 32;
		if (totalPorts <= 1) return bodyStart + bodyHeight / 2;
		const spacing = bodyHeight / (totalPorts);
		return bodyStart + spacing * (portIndex + 0.5);
	}

	// Generate bezier path for edge
	function getEdgePath(edge: GraphEdge): string {
		const fromNode = nodes.find(n => n.id === edge.from_node);
		const toNode = nodes.find(n => n.id === edge.to_node);
		if (!fromNode || !toNode) return "";

		const fromHeight = getNodeHeight(fromNode);
		const toHeight = getNodeHeight(toNode);

		// Find port indices
		const fromPortIndex = fromNode.outputs.indexOf(edge.from_port);
		const toPortIndex = toNode.inputs.findIndex(p => p.name === edge.to_port);

		// Calculate positions
		const fromX = fromNode.x + NODE_WIDTH;
		const fromY = fromNode.y + getPortY(fromPortIndex, fromNode.outputs.length, fromHeight);
		const toX = toNode.x;
		const toY = toNode.y + getPortY(toPortIndex, toNode.inputs.length, toHeight);

		// Bezier control points
		const dx = Math.abs(toX - fromX);
		const controlOffset = Math.max(dx * 0.4, 80);

		return `M ${fromX} ${fromY} C ${fromX + controlOffset} ${fromY}, ${toX - controlOffset} ${toY}, ${toX} ${toY}`;
	}

	// Pan handlers
	function handleMouseDown(e: MouseEvent) {
		if (e.button === 0 && e.target === canvasRef) {
			isPanning = true;
			startPan = { x: e.clientX - transform.x, y: e.clientY - transform.y };
		}
	}

	function handleMouseMove(e: MouseEvent) {
		if (isPanning) {
			transform.x = e.clientX - startPan.x;
			transform.y = e.clientY - startPan.y;
		}
	}

	function handleMouseUp() {
		isPanning = false;
	}

	function handleWheel(e: WheelEvent) {
		e.preventDefault();
		const delta = e.deltaY > 0 ? 0.9 : 1.1;
		const newScale = Math.max(0.25, Math.min(2, transform.scale * delta));
		transform.scale = newScale;
	}

	// Run to node
	function handleRunToNode(nodeName: string) {
		if (gradio.props.value) {
			gradio.props.value = {
				...gradio.props.value,
				run_to_node: nodeName
			};
		}
	}

	// Type badge colors
	function getTypeBadgeClass(type: string): string {
		const classes: Record<string, string> = {
			'FN': 'badge-fn',
			'INPUT': 'badge-input',
			'MAP': 'badge-map',
			'GRADIO': 'badge-gradio',
			'MODEL': 'badge-model',
		};
		return classes[type] || 'badge-default';
	}

	// Status colors
	function getStatusClass(status: string): string {
		const classes: Record<string, string> = {
			'pending': 'status-pending',
			'running': 'status-running',
			'completed': 'status-completed',
			'error': 'status-error',
		};
		return classes[status] || 'status-pending';
	}
</script>

<Block
	elem_id={gradio.shared.elem_id}
	elem_classes={gradio.shared.elem_classes}
	visible={gradio.shared.visible}
	padding={false}
	scale={gradio.shared.scale}
	min_width={gradio.shared.min_width}
	height={gradio.props.height || "100vh"}
	allow_overflow={false}
	flex={true}
>
	{#if gradio.shared.loading_status}
		<StatusTracker
			autoscroll={gradio.shared.autoscroll}
			i18n={gradio.i18n}
			{...gradio.shared.loading_status}
			on_clear_status={() => gradio.dispatch("clear_status", gradio.shared.loading_status)}
		/>
	{/if}

	<!-- Canvas Container -->
	<div 
		class="canvas-container"
		bind:this={canvasRef}
		onmousedown={handleMouseDown}
		onmousemove={handleMouseMove}
		onmouseup={handleMouseUp}
		onmouseleave={handleMouseUp}
		onwheel={handleWheel}
	>
		<!-- Grid Background -->
		<svg class="grid-background">
			<defs>
				<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
					<circle cx="20" cy="20" r="1" fill="rgba(249, 115, 22, 0.12)" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#grid)" />
		</svg>

		<!-- Canvas content (transformed) -->
		<div 
			class="canvas"
			style="transform: translate({transform.x}px, {transform.y}px) scale({transform.scale})"
		>
			<!-- Edges (SVG layer) -->
			<svg class="edges-layer" width="4000" height="3000">
				{#each edges as edge}
					<path 
						class="edge"
						d={getEdgePath(edge)}
					/>
				{/each}
			</svg>

			<!-- Nodes -->
			{#each nodes as node}
				{@const nodeHeight = getNodeHeight(node)}
				<div 
					class="node"
					style="left: {node.x}px; top: {node.y}px; width: {NODE_WIDTH}px; min-height: {nodeHeight}px;"
				>
					<!-- Header -->
					<div class="node-header">
						<span class="type-badge {getTypeBadgeClass(node.type)}">{node.type}</span>
						<span class="node-title">{node.name}</span>
						{#if !node.is_input_node}
							<button 
								class="play-btn" 
								class:play-btn-primary={node.is_output_node}
								onclick={() => handleRunToNode(node.name)}
							>
								<svg viewBox="0 0 24 24" fill="currentColor">
									<polygon points="6,4 20,12 6,20"/>
								</svg>
							</button>
						{/if}
					</div>

					<!-- Ports -->
					<div class="node-body">
						<div class="ports-container">
							<!-- Input ports -->
							<div class="input-ports">
								{#each node.inputs as port, i}
									<div class="port input-port">
										<span class="port-dot"></span>
										<span class="port-label">{port.name}</span>
									</div>
								{/each}
							</div>

							<!-- Output ports -->
							<div class="output-ports">
								{#each node.outputs as port, i}
									<div class="port output-port">
										<span class="port-label">{port}</span>
										<span class="port-dot"></span>
									</div>
								{/each}
							</div>
						</div>
					</div>

					<!-- Status -->
					<div class="node-status {getStatusClass(node.status)}">
						<span class="status-dot"></span>
						<span class="status-text">{node.status.toUpperCase()}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</Block>

<style>
	@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');

	.canvas-container {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: linear-gradient(165deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%);
		cursor: grab;
		font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
	}

	.canvas-container:active {
		cursor: grabbing;
	}

	.grid-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 0;
	}

	.canvas {
		position: absolute;
		top: 0;
		left: 0;
		transform-origin: 0 0;
		z-index: 1;
	}

	/* Edges */
	.edges-layer {
		position: absolute;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: 1;
	}

	.edge {
		fill: none;
		stroke: #f97316;
		stroke-width: 2.5;
		stroke-linecap: round;
		filter: drop-shadow(0 0 6px rgba(249, 115, 22, 0.4));
	}

	/* Nodes */
	.node {
		position: absolute;
		background: linear-gradient(165deg, rgba(20, 20, 20, 0.95) 0%, rgba(12, 12, 12, 0.98) 100%);
		border: 1px solid rgba(249, 115, 22, 0.2);
		border-radius: 12px;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
		z-index: 10;
		overflow: hidden;
	}

	.node-header {
		padding: 12px 14px;
		background: linear-gradient(135deg, rgba(249, 115, 22, 0.12) 0%, rgba(234, 88, 12, 0.06) 100%);
		display: flex;
		align-items: center;
		gap: 10px;
		border-bottom: 1px solid rgba(249, 115, 22, 0.1);
	}

	.type-badge {
		font-size: 9px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.8px;
		padding: 4px 8px;
		border-radius: 6px;
		font-family: 'JetBrains Mono', monospace;
	}

	.badge-fn {
		background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
		color: #fff;
	}

	.badge-input {
		background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
		color: #fff;
	}

	.badge-map {
		background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
		color: #fff;
	}

	.badge-gradio {
		background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
		color: #fff;
	}

	.badge-model {
		background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
		color: #fff;
	}

	.badge-default {
		background: rgba(100, 100, 100, 0.5);
		color: #fff;
	}

	.node-title {
		flex: 1;
		font-size: 13px;
		font-weight: 600;
		color: #fff;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.play-btn {
		width: 26px;
		height: 26px;
		border-radius: 50%;
		border: 2px solid #f97316;
		background: rgba(249, 115, 22, 0.1);
		color: #f97316;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		transition: all 0.15s ease;
	}

	.play-btn svg {
		width: 10px;
		height: 10px;
		margin-left: 2px;
		fill: #f97316;
	}

	.play-btn-primary {
		background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
		border: none;
		box-shadow: 0 2px 8px rgba(249, 115, 22, 0.4);
	}

	.play-btn-primary svg {
		fill: #fff;
	}

	/* Node body & ports */
	.node-body {
		padding: 12px 0;
	}

	.ports-container {
		display: flex;
		justify-content: space-between;
	}

	.input-ports, .output-ports {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.output-ports {
		align-items: flex-end;
	}

	.port {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 2px 14px;
	}

	.port-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.input-port .port-dot {
		background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
		box-shadow: 0 0 8px rgba(249, 115, 22, 0.5);
	}

	.output-port .port-dot {
		background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
		box-shadow: 0 0 8px rgba(251, 146, 60, 0.5);
	}

	.port-label {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		font-weight: 500;
		color: #d4d4d4;
	}

	/* Status */
	.node-status {
		padding: 10px 14px;
		border-top: 1px solid rgba(249, 115, 22, 0.1);
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 9px;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: 600;
		font-family: 'JetBrains Mono', monospace;
	}

	.status-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	.status-pending .status-dot {
		background: rgba(120, 120, 120, 0.5);
	}
	.status-pending .status-text {
		color: rgba(160, 160, 160, 0.8);
	}

	.status-running .status-dot {
		background: #f97316;
		box-shadow: 0 0 10px rgba(249, 115, 22, 0.6);
		animation: pulse 1s ease-in-out infinite;
	}
	.status-running .status-text {
		color: #fb923c;
	}

	.status-completed .status-dot {
		background: #22c55e;
		box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
	}
	.status-completed .status-text {
		color: #4ade80;
	}

	.status-error .status-dot {
		background: #ef4444;
		box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
	}
	.status-error .status-text {
		color: #f87171;
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.6; transform: scale(1.3); }
	}
</style>
