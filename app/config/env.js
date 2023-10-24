// env.js
import { config } from 'dotenv';

export const loadEnvVariables = () => {
  const result = config({
    path: '.env_dev'
});

  if (result.error) {
    console.error('Error loading environment variables:', result.error);
  }
};
