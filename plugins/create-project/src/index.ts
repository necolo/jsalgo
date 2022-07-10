import path from 'path';

class CreateCommand {
  public readonly scope = '@jsalgo';
  public readonly dir = 'packages';
  constructor(
    public packageName = '',
  ) {}
}