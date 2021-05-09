import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'todos',
})
export class Todo extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING })
  description: string;
}
