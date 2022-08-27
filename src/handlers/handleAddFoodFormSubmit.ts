export const handleAddFoodFormSubmit = (event: React.FormEvent<HTMLFormElement>, foodName: string, foodPrice: number) =>{
   event.preventDefault()
   var consumedProductList = localStorage.getItem('consumedProductList')
   if (consumedProductList != null){
      const consumedProduct = {name: foodName, price: foodPrice, consumersList: []}
      JSON.parse(consumedProductList).push(consumedProduct)
   }
   else{
      localStorage.setItem('consumedProductList', JSON.stringify(consumedProductList))
   }
   return
   
}