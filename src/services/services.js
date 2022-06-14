const URL_API = "http://localhost:8080/api/items";

const getInformation = async (query) => {
   try {
       const response = await fetch(`${URL_API}?q=${query}`, {
           method: "GET",
           headers: {
               "Content-Type": "application/json",
           },
       });
       return response.json();
   }catch(error){
         console.log(error);
   }
}

export {
    getInformation,
}