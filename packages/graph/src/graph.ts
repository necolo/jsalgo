import { Edge } from './edge';
import { Vertex } from './vertex';

interface GivenVertex<T> {
  key: string;
  value: T;
}

interface GivenEdge {
  from: string;
  to: string;
}

export class Graph<T, V extends Vertex<T> = Vertex<T>> {
  constructor(
    public vertexes: V[],
    public edges: Edge<T>[],
  ) {}

  /**
   * Add the vertex with the key and value
   * @param key vertex key
   * @param value vertex stored value
   */
  addVertex(key: string, value: T) {

  }

  /**
   * Add the edge from vertex x to the vertex y
   * @param from vertex key
   * @param to vertex key
   */
  addEdge(from: string, to: string) {

  }

  /**
   * Removes the vertex by given key 
   * @param key vertex key
   */
  removeVertex(key: string) {

  }

  /**
   * Removes the edge from vertex x to the vertex y
   * @param from vertex key
   * @param to  vertex key
   */
  removeEdge(from: string, to: string) {

  }

  /**
   * Tests whether there is an edge from vertex x to vertex y
   * @param x the start vertex
   * @param y the end vertex
   */
  adjacent(x: string, y: string) {

  }

  /**
   * lists all vertices y such that there is an edge from the vertex x to the vertex y
   * @param x 
   */
  neighbors(x: string) {

  }

  getVertex(key: string) {

  }

  setVertex(key: string, value: T) {

  }

  /* -------------------------------------------------------------------------- */
  /*                               native methods                               */
  /* -------------------------------------------------------------------------- */

}

export default Graph;