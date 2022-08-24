import { Vertex } from './vertex';

export class Edge<T, V extends Vertex<T> = Vertex<T>> {
  constructor(
    public from: V,
    public to: V,
    public weight = 0,
  ) {}
}