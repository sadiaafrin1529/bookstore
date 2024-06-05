import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function logout() {
    const [authUser, setAuthUSer] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUSer({
                ...authUser,
                user:null
            })
            localStorage.removeItem("User")
            toast.success("Logout successfully")
           
              setTimeout(() => {
                window.location.reload();
               
              }, 3000);
            // window.location.reload();
                
        }
        catch (error) {
            toast.error("Error" + error)
            setTimeout(()=>{},2000)
        }
    }
  return (
    <div>
          <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
          onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default logout
