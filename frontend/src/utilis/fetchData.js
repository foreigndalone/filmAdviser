export const signUp = async (userData) => {
  try {
    const res = await fetch("http://localhost:5001/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", 
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    return data;

  } catch (err) {
    console.error("signup error:", err);
  }
};







export const addUsersData = async(userData)=>{
    try{
        const res = await fetch('http://localhost:5001/api/user/update',{
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include", 
                body: JSON.stringify(userData)
        })
        const data = await res.json()
        return data
    }catch(err){
        console.error("add data error:", err);
    }
}









export const loginUp = async (userData) => {
  try {
    const res = await fetch("http://localhost:5001/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",    // <--- берем куку!!!
      body: JSON.stringify(userData),
    });

    return await res.json();
  } catch (err) {
    console.error("login error:", err);
  }
};