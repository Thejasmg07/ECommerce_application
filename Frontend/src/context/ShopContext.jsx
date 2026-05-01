import { createContext,useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios"


export const ShopContext=createContext();

const ShopContextProvider=(props)=>{


    const currency = '$';
    const delivery_fee = 10;
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const [search,setSearch]=useState();
    const [showSearch,setShowSearch]=useState(false);
    const [cartItems,setCartItems]=useState([]);
    const [products,setProducts]=useState([]);
    const [token,setToken]=useState('');
    const navigate=useNavigate();


    let addToCart = async(itemId,size)=>{


        if(!size){
            toast.error('Select Product Size');
            return;
        }
        
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]++;
            }else{
                cartData[itemId][size]=1;
            }
        }else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }
        setCartItems(cartData);
    }


    const getCartAmount=()=>{

        let totalAmount=0;
        for(const itemId in cartItems){
            let productInfo=products.find((product)=>product._id===parseInt(itemId));
            for(const item in cartItems[itemId]){
                try{
                    if(cartItems[itemId][item]>0){
                        totalAmount+=productInfo.price * cartItems[itemId][item];
                    }
                }catch(e){
                    console.log(e);
                }
            }
        }
        return totalAmount;

    }


    const getCartCount=()=>{
        let totalCount=0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalCount +=cartItems[items][item];
                    }
                }catch(e){
                    console.log(e);
                }
            }
        
        }
        return totalCount;
    }


    const updateQuantity=async(itemId,size,quantity)=>{

        let cartData=structuredClone(cartItems);

        cartData[itemId][size]=quantity;
        setCartItems(cartData);
    }

    const getProductsData = async () =>{
        try {

            const response=await axios.get(backendUrl + '/api/product/list')
            if(response.data.success){
                setProducts(response.data.products)
            }else{
                toast.error(response.data.message)
            }
            
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        getProductsData();
    },[])

    useEffect(()=>{
        if (!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'))
        }
    },[])

    const value={
        products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate,backendUrl,token,setToken
    }

    return(
        <ShopContext.Provider value={value}>
        {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;