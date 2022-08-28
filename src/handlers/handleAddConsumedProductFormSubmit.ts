

export const handleAddConsumedProductFormSubmit = (event: React.FormEvent<HTMLFormElement>, productName: string, productPrice: number, consumedProductList: any[], setConsumedProductList: any) =>{
   event.preventDefault()
   const newConsumedProductList = consumedProductList.concat({name: productName, price: productPrice, consumersList: []})
   setConsumedProductList(newConsumedProductList)
   return
   
}