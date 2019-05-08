import "reflect-metadata";
import { createConnection, createQueryBuilder } from "typeorm";
import { Post } from "./entity/Post";
import { CategoryPage } from "./entity/CategoryPage";
const moment = require('moment');

createConnection().then(async connection => {

    console.time("TypeORM Transaction 1")
    await connection.getRepository(Post).find({ where: { authorId: 12, status: 'active' } })
    console.timeEnd("TypeORM Transaction 1")

    console.time("TypeORM Transaction 2")
    await connection.getRepository(CategoryPage)
        .createQueryBuilder()
        .where("category_id = :categoryId", { categoryId: 5 })
        .andWhere("show_at is null or show_at >= now()" )
        .andWhere("hide_at is null or hide_at <= now()" )

    order: {
        updated_at: 'DESC'
    }
    console.timeEnd("TypeORM Transaction 2")


}).catch(error => console.log(error));