export interface IRepository<D> {
  create(data): Promise<D>
  selectAll(): Promise<D[]>
}
