// Define a function that takes a parameter and returns a keyboard type
export const getKeyboardType = (param) => {
    switch (param) {
      case 'email':
        return 'email-address';
      case 'numeric':
        return 'numeric';
      case 'phone':
        return 'phone-pad';
      default:
        return 'default';
    }
  };
  