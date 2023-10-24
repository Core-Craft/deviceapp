import axios from 'axios';

const api = axios.create({
  baseURL: "https://d9b8-2401-4900-8085-c1f6-c80c-af67-8dac-3653.ngrok-free.app/", // Base URL without the endpoint
});

export const register_user = async () => {
  try {
    const response = await api.post('api/v1/user/register/', {
      "full_name": "string1"
    });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

