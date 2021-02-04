import axios from "axios";

class List {
  constructor() {
    this.list = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  getAllLists = async() => {
    try {
        const all = await this.list.get('/lists/all')
        return all.data
    } catch (error) {
        console.log(error)
    }
  }

  addList = async( name, description) =>{
    try {
      const theList = await this.list.post(`/lists/add`,{ name, description})
  
      return theList.data
    } catch (error) {
      console.log(error)
    }
  }

  getList = async (id) =>{
    try {
      const theList = await this.list.get(`/lists/${id}`)
      return theList.data
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

const axiosRequestFunctions = new List();

export default axiosRequestFunctions;
