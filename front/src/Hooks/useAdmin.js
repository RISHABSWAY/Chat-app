import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getusers = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/api/admin/admin`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setUsers(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getusers();
  }, []);

  return { loading, users }; // Return as an object
};

export default useAdmin;
