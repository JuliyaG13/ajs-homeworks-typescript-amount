interface Product {
    id: number;
    name: string;
}

class Cart {
    private items: Product[] = [];

    public addItem(product: Product): void {
        this.items.push(product);
    }

    public getItems(): Product[] {
        return this.items;
    }
}

export { Cart, Product };