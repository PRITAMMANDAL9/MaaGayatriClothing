import { createContext, useContext, useEffect, useMemo, useState } from 'react';
const ShopContext = createContext(null);
export function ShopProvider({children}) {
 const [cart,setCart]=useState(()=>JSON.parse(localStorage.getItem('mg-cart')||'[]'));
 const [wishlist,setWishlist]=useState(()=>JSON.parse(localStorage.getItem('mg-wishlist')||'[]'));
 useEffect(()=>localStorage.setItem('mg-cart',JSON.stringify(cart)),[cart]);
 useEffect(()=>localStorage.setItem('mg-wishlist',JSON.stringify(wishlist)),[wishlist]);
 const addToCart=(product,size='M')=>setCart(old=>{const found=old.find(x=>x.id===product.id&&x.size===size);return found?old.map(x=>x.id===product.id&&x.size===size?{...x,qty:x.qty+1}:x):[...old,{...product,size,qty:1}]});
 const updateQty=(id,size,qty)=>setCart(old=>qty<1?old.filter(x=>!(x.id===id&&x.size===size)):old.map(x=>x.id===id&&x.size===size?{...x,qty}:x));
 const removeFromCart=(id,size)=>setCart(old=>old.filter(x=>!(x.id===id&&x.size===size)));
 const toggleWishlist=id=>setWishlist(old=>old.includes(id)?old.filter(x=>x!==id):[...old,id]);
 const value=useMemo(()=>({cart,wishlist,addToCart,updateQty,removeFromCart,toggleWishlist,clearCart:()=>setCart([]),cartCount:cart.reduce((s,x)=>s+x.qty,0),subtotal:cart.reduce((s,x)=>s+x.price*x.qty,0)}),[cart,wishlist]);
 return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
export const useShop=()=>useContext(ShopContext);