import axios from "axios"
const BASE = "http://localhost:3005";
const USERS = "users";
const PRODUCTS = "products";
const BASKETS = "baskets";

export const getAllUsers = () => axios.get(`${BASE}/${USERS}`);
export const addNewUser = (username, email, password) => axios.post(`${BASE}/${USERS}`, { username, email, password });
export const getAllProducts = () => axios.get(`${BASE}/${PRODUCTS}`);
export const addNewProduct = (product) => axios.post(`${BASE}/${PRODUCTS}`, product);
export const getProductById = (id) => axios.get(`${BASE}/${PRODUCTS}/${id}`);
export const addNewBasket = (username, order, total) => axios.post(`${BASE}/${BASKETS}`, { username, order, total });