/** @format */

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { switchCase } from "@babel/types";

export const getListProductApi = createAsyncThunk(
  "product/getApiData",
  async () => {
    const res = await axios
      .get(`http://localhost:5000/products/search?KeySearch`)
      .then((res) => {
        // console.log(".listProductApi ~ res", res);
        return res;
      })
      .catch((e) => {
        console.log("e", e);
      });
    return res.data;
  }
);
export const updateProductApi = createAsyncThunk(
  "product/updateProductApi",
  async (payload) => {
    const res = await axios
      .put(`http://localhost:5000/products/search?KeySearch${payload.id}`, {
        name: payload.name,
        type: payload.type,
        price: payload.price,
        stock: payload.stock,
      })
      .then((res) => {
        // console.log(".listProductApi ~ res", res);
        return res;
      })
      .catch((e) => {
        // console.log("e", e);
      });
    return res.data;
  }
);
export const deleteListProductApi = createAsyncThunk(
  "product/deleteApiData",
  async (id) => {
    const res = await axios
      .delete(`http://localhost:5000/products/search?KeySearch${id}`)
      .then((res) => {
        // console.log(".listProductApi ~ res", res);
        return res;
      })
      .catch((e) => {
        console.log("e", e);
      });
    return res.data;
  }
);
const listProduct = createSlice({
  name: "listProduct",
  initialState: {
    listProductApi: [],
    listProductInit: [],
    cart: [],
    order: {
      // cart: [
      //   {
      //     product: {},
      //     quantity: 0,
      //   },
      // ],
      // total: 0,
      // discount: 0,
      // customer: {},
    },
    wishlist: [],
    relateProduct: [],
    sortType: "All",
    sortPrice: null,
    filterType: null,
    searchValue: null,
  },
  reducers: {
    setSort: (state, action) => {
      state.sortType = action.payload;
      state.listProductApi = [...state.listProductInit].sort((a, b) => {
        if (action.payload === "NameA") {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        }
        if (action.payload === "NameZ") {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
        }
        if (action.payload === "All") {
          return true;
        }
        if (action.payload === "RatingZ") {
          return b.rating - a.rating;
        }
        if (action.payload === "RatingA") {
          return a.rating - b.rating;
        }
        if (action.payload === "PriceA") {
          return a.price - b.price;
        }
        if (action.payload === "PriceZ") {
          return b.price - a.price;
        }
      });
    },
    setSortItem: (state, action) => {
      state.sortPrice = action.payload;
      state.listProductApi = [...state.listProductInit].filter(
        (item, index) => {
          if (action.payload === 0) {
            return item.price < 10 && item.price > 1;
          }
          if (action.payload === 1) {
            return item.price < 50 && item.price > 10;
          }
          if (action.payload === 2) {
            return item.price > 50;
          }
        }
      );
    },
    filterType: (state, action) => {
      state.filterType = action.payload.key;
      state.listProductApi = [...state.listProductInit].filter(
        (item, index) => {
          const id = action.payload.key;
          switch (id) {
            case "1":
              return item.type === "vegetables";
            case "11":
              return item.type === "fruits";
            case "8":
              return item.type === "juice";
            case "5":
              return item.type === "meats";
            default:
              return false;
          }
        }
      );
    },
    filterColor: (state, action) => {
      state.filterColor = action.payload.key;
      state.listProductApi = [...state.listProductInit].filter((item) => {
        const id = action.payload.key;
        switch (id) {
          case "red":
            return item.color === "red";
          case "yellow":
            return item.color === "yellow";
          case "orange":
            return item.color === "orange";
          case "purple":
            return item.color === "purple";
          case "green":
            return item.color === "green";
          default:
            return false;
        }
      });
    },
    addToCart: (state, action) => {
      const id = action.payload.id;
      const isExist = state.cart.find((item) => item.id === id);

      if (isExist) {
        state.cart = state.cart.map((item) => {
          if (item.id === id) {
            return {
              ...action.payload,
              count: item.count + 1,
            };
          }
          return item;
        });
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    addToWishlist: (state, action) => {
      const id = action.payload.id;
      const isExist = state.wishlist.find((item) => item.id === id);
      if (isExist) {
        return;
      } else {
        state.wishlist = [...state.wishlist, action.payload];
      }
    },
    deleteItemCart: (state, action) => {
      state.cart = state.cart.filter((item) => action.payload !== item.id);
    },
    deleteItemWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => action.payload !== item.id
      );
    },
    deleteItem: (state, action) => {
      state.listProductInit = state.listProductInit.filter(
        (item) => action.payload !== item.id
      );
    },
    editCartItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (action.payload.id === item.id) {
          return {
            ...action.payload,
            total: action.payload.price * action.payload.count,
          };
        }

        return item;
      });
    },
    setSortPrice: (state, action) => {
      state.listProductApi = [...state.listProductApi].sort((a, b) => {
        const id = action.payload.key;
        switch (id) {
          case "2":
            return a.price - b.price;
          case "6":
            return a.price - b.price;

          case "9":
            return a.price - b.price;
          case "12":
            return a.price - b.price;
          case "3":
            return a.rating - b.rating;
          case "7":
            return a.rating - b.rating;

          case "10":
            return a.rating - b.rating;
          case "13":
            return a.rating - b.rating;
          default:
            return true;
        }
      });
    },
    searchItem: (state, action) => {
      state.searchValue = action.payload;
      const value = action.payload;
      state.listProductApi = [...state.listProductInit]
        .map((item, index) => {
          let condition = false;
          if (item.name.toUpperCase().includes(value)) {
            condition = true;
          }
          if (item.name.toLowerCase().includes(value)) {
            condition = true;
          }
          if (item.type.includes(value)) {
            condition = true;
          }
          if (item.color.includes(value)) {
            condition = true;
          }
          return { ...item, condition };
        })
        .filter((vl) => vl.condition);
    },
  },
  extraReducers: {
    [getListProductApi.pending]: (state, action) => {},
    [getListProductApi.rejected]: (state, action) => {},
    [getListProductApi.fulfilled]: (state, action) => {
      state.listProductApi = action.payload || [];
      state.listProductInit = action.payload || [];
    },
    [deleteListProductApi.pending]: (state, action) => {},
  },
});

const { reducer, actions } = listProduct;
export const {
  setSort,
  setSortItem,
  filterType,
  addToCart,
  setSortPrice,
  deleteItemCart,
  editCartItem,
  addToWishlist,
  deleteItemWishlist,
  addToDetail,
  deleteItem,
  filterColor,
  searchItem,
} = actions;
export default reducer;
