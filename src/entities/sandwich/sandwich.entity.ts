import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
export enum SandwichCategory {
  Lanches = "Lanches",
  Combos = "Combos",
  Acompanhamentos = "Acompanhamentos",
  Bebidas = "Bebidas",
  Sobremesas = "Sobremesas",
}

@Entity()
export class Sandwich {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({
    type: "varchar",
    enum: SandwichCategory,
    default: SandwichCategory.Lanches,
  })
  category: SandwichCategory;

  @Column("decimal", { precision: 5, scale: 2 })
  price: number;

  @Column({ type: "varchar" })
  img: string;
}
