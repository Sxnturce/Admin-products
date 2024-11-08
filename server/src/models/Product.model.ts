import { Table, Column, DataType, Model, Default } from "sequelize-typescript";

@Table({
	tableName: "products",
})
class Product extends Model {
	@Column({
		type: DataType.STRING(100),
	})
	name: string;

	@Column({
		type: DataType.DECIMAL(6, 2),
		get() {
			const value = this.getDataValue("price");
			return value !== null ? parseFloat(value) : null;
		},
	})
	price: number;

	@Default(true)
	@Column({
		type: DataType.BOOLEAN,
	})
	available: boolean;
}

export default Product;
