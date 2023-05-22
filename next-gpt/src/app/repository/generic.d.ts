export interface IRepository<D> {
  create(data): Promise<D>
  selectAll(data): Promise<D[]>
}
