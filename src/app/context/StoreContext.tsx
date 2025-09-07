"use client";
import React, { Children, useContext, useState } from "react";
import { createContext } from "react";
import CartItem from "./../components/CartItem";
import { count } from "console";

type TstorecontexProps = {
  children: React.ReactNode;
};

type TCartItem = {//نوع هر آیتم سبد خرید
  id: number;
  count: number;
};
type Tstorecontext = {
  CartItems: TCartItem[];//کانتکس باید کل آرایه های سبد خرید را دشاته باشد
  handelIncreaseProduct:(id:number)=>void//تابعی که بتونه یه محصول رو به سبد اضافه کنه یا تعدادش رو زیاد کنه
  handelDecreaseProduct:(id:number)=>void//تابعی که بتونه یه محصول رو از سبد کم کنه یا تعدادش رو کم کنه
  handelCountCartItem:(id:number)=>number//تابعی که تعداد یک محصول رو برگردونه
  handelTotalCartItem:()=>number//تابعی که تعداد کل محصولات سبد خرید رو برگردونه
  removeItem:(id:number)=>void//تابعی که یک محصول رو از سبد حذف کنه
};
const storecontext = createContext({} as Tstorecontext);

export const useStorecontext = () => {
  //یک کاستوم هوک تعریف کردیم برای کانتکس
  return useContext(storecontext);
};

export function StoreContextProvider({ children }: TstorecontexProps) {
    
  const [CartItems, setCartItem] = useState<TCartItem[]>([]);

  const handelCountCartItem = (id: number) => {
    return CartItems.find((item) => item.id == id)?.count || 0;
  }
  const handelTotalCartItem = () => {
    return CartItems.reduce((total, item) => total + item.count, 0);
  }
  const handelIncreaseProduct=(id:number)=> {
 
    setCartItem((previous) => {
      const isNotExist = previous.find((item) => item.id == id);
      if (!isNotExist) 
        return [...previous, { id: id, count: 1 }];
      
      
      return  previous.map(item => {
          if (item.id == id) {
            return {
              ...item,
              count: item.count + 1,
            };
          } 
    
            return item;
          
        });
      

 
    });
  };

  const handelDecreaseProduct=(id:number)=> {
 
    setCartItem((previous) => {
      const isLastItem= previous.find((item) => item.id == id)?.count==1;
      if (isLastItem) 
        return previous.filter(item=>item.id !=id);
      
      
      return  previous.map(item => {
          if (item.id == id) {
            return {
              ...item,
              count: item.count -1,
            };
          } 
    
            return item;
          
        });
      

 
    });
  };

 const removeItem=(id:number)=>{
    setCartItem((previous) => {
      return previous.filter(item=>item.id !=id);
    });
  }

  return (
    <storecontext.Provider value={{ CartItems ,handelIncreaseProduct,handelDecreaseProduct,handelCountCartItem,handelTotalCartItem,removeItem}}>
      {children}
    </storecontext.Provider>
  );
}
