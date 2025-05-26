import { FhirDependencyGraph } from './fhir-dependency-graph';
import * as types from './types';

export type StronglyConnectedComponent = string[];

/**
 * Tarjan's Algorithm Implementation
 * @returns An array of strongly connected components, each is an array of node names.
 */
export function findStronglyConnectedComponents(
  graph: FhirDependencyGraph,
): StronglyConnectedComponent[] {
  const nodes = Array.from(graph.getAllNodes().values());
  const stack: types.GraphNode[] = [];
  const onStack: Set<string> = new Set();
  const indices: Map<string, number> = new Map();
  const lowLinks: Map<string, number> = new Map();
  let index = 0;

  const sccs: StronglyConnectedComponent[] = [];

  // Depth-first search
  function strongConnect(node: types.GraphNode) {
    // Set the depth index for this node to the smallest unused index
    indices.set(node.type.name, index);
    lowLinks.set(node.type.name, index);
    index++;
    stack.push(node);
    onStack.add(node.type.name);

    // Consider successors of `node`
    for (const edge of node.edges) {
      const successor = graph.getAllNodes().get(edge.to);
      if (!successor) {
        continue;
      }
      if (!indices.has(successor.type.name)) {
        // Successor has not yet been visited; recurse on it
        strongConnect(successor);
        const successorLowLink = lowLinks.get(successor.type.name)!;
        const nodeLowLink = lowLinks.get(node.type.name)!;
        lowLinks.set(node.type.name, Math.min(nodeLowLink, successorLowLink));
      } else if (onStack.has(successor.type.name)) {
        // The successor is on the stack and hence in the current SCC
        const successorIndex = indices.get(successor.type.name)!;
        const nodeLowLink = lowLinks.get(node.type.name)!;
        lowLinks.set(node.type.name, Math.min(nodeLowLink, successorIndex));
      }
    }

    // If node is a root node, pop the stack and generate an SCC
    if (lowLinks.get(node.type.name) === indices.get(node.type.name)) {
      const scc: string[] = [];
      let w: types.GraphNode | undefined;
      do {
        w = stack.pop();
        onStack.delete(w!.type.name);
        scc.push(w!.type.name);
      } while (w && w.type.name !== node.type.name);

      sccs.push(scc);
    }
  }

  for (const node of nodes) {
    if (!indices.has(node.type.name)) {
      strongConnect(node);
    }
  }
  return sccs;
}
