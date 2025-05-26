import * as types from './types';

export class FhirDependencyGraph {
  private nodes: Map<string, types.GraphNode>;

  constructor() {
    this.nodes = new Map();
  }

  addType(type: types.FhirTypeNode): void {
    if (!this.nodes.has(type.name)) {
      this.nodes.set(type.name, { type, edges: [] });
    }
  }

  addDependency(from: types.FhirTypeNode, to: types.FhirTypeNode): void {
    if (!this.nodes.has(from.name)) {
      this.addType(from);
    }
    if (!this.nodes.has(to.name)) {
      this.addType(to);
    }
    const graphNode = this.nodes.get(from.name)!;
    if (!graphNode.edges.some((edge) => edge.to === to.name)) {
      graphNode.edges.push({ to: to.name });
    }
  }

  getAllNodes(): Map<string, types.GraphNode> {
    return this.nodes;
  }
}
