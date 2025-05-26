export interface FhirTypeNode {
  name: string;
}

export interface DependencyEdge {
  to: string;
}

export interface GraphNode {
  type: FhirTypeNode;
  edges: DependencyEdge[];
}
