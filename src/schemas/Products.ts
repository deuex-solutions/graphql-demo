import { objectType, unionType } from 'nexus';
import SchemaUtils from './SchemaUtils';

export const Products = objectType({
    name: "Products",
    definition(t) {
        t.string("sortBy", { nullable: true })
        t.field("edges", { type: ProductDetailEdges, list: true, nullable: false })
        t.field("pageInfo", { type: SchemaUtils.PageInfo, nullable: false })
        t.int("totalCount", { nullable: false })
    }
})

export const Product = objectType({
    name: "Product",
    definition(t) {
        t.id("id", { nullable: false })
        t.string("name", { nullable: true })
    }
});

export const ProductVariant = objectType({
    name: "ProductVariant",
    definition(t) {
        t.id("id")
        t.string("name", { nullable: true })
    }
});

export const ProductOrVariant = unionType({
    name: "ProductOrVariant",
    definition(t) {
        t.members(Product, ProductVariant)
        t.resolveType((obj, ctx, info) => {
            if (obj.name) {
                return obj.name;
            }
            return null
        });
    }
});

export const ProductDetailEdges = objectType({
    name: "ProductDetailEdges",
    definition(t) {
        t.string("cursor", { nullable: false })
        t.field("node", { type: ProductOrVariant, nullable: true })
    }
});