import { Cart } from './cart';
import { Movie } from './movie';

const cart = new Cart();
const avengers = new Movie("Мстители", 2012, "США", "Avengers Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137);

cart.addItem({ id: 1, name: avengers.getInfo() });

console.log(cart.getItems());