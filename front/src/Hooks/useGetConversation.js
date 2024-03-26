import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/api/users`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversation();
  }, []);

  return { loading, conversations };
};

export default useGetConversation;
