import { Table, Column, DataType, Model, Default } from "sequelize-typescript";

@Table({
	tableName: "products",
})
class Product extends Model {
	@Column({
		type: DataType.STRING(100),
	})
	declare name: string;

	@Column({
		type: DataType.DECIMAL(6, 2),
		get() {
			const value = this.getDataValue("price");
			return value !== null ? parseFloat(value) : null;
		},
	})
	declare price: number;

	@Default(true)
	@Column({
		type: DataType.BOOLEAN,
	})
	declare available: boolean;
}

export default Product;
