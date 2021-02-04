import axios from "axios";

class Product {
  constructor() {
    this.product = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  getAllProducts = async() => {
    try {
        const all = await this.product.get('/products/all')
        return all.data
    } catch (error) {
        console.log(error)
    }
  }

  addProduct = async( item, amount, price) =>{
    try {
      const theProduct = await this.product.post(`/products/add`,{ item, amount, price})
  
      return theProduct.data
    } catch (error) {
      console.log(error)
    }
  }

  // deleteProduct = async( id ) =>{
  //   try {
  //     const theProduct = await this.product.delete(`/products/delete/${id}`)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
}

const axiosRequestFunctions = new Product();

export default axiosRequestFunctions;
