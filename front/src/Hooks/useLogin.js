import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/authContext';

const useLogin = () => {
  const [loading, setLoading] = useState(false); // Correctly destructure useState

  const { setAuthUser } = useAuthContext();

  const login = async (Email, password) => {
    const success = handleInputErrors(Email, password);
    if(!success)return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Email, password })
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return { loading, login };
};

export default useLogin;


function handleInputErrors(Email, password) {
	if (!Email || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}