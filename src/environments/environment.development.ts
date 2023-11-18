export const environment = {
    production: false,
    apiBaseUrl: getBaseUrl(),
  };
  
  function getBaseUrl() {
    // Logic to determine the default IP address dynamically
    // Here, we use a simple approach to get the current host
    const defaultIp = window.location.hostname;
  
    // You can add additional logic if needed
  
    return `http://${defaultIp}:8081`; // Replace 'your-port-number' with the actual port
  }