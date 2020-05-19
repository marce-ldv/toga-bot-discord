export default interface UnitOfWork {
  commit(): boolean;
}