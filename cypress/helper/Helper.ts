export default class Helper {
    getTimestamp() {
      const now = new Date();
      return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now
        .getDate()
        .toString()
        .padStart(2, '0')}_${now
        .getHours()
        .toString()
        .padStart(2, '0')}-${now
        .getMinutes()
        .toString()
        .padStart(2, '0')}-${now.getSeconds().toString().padStart(2, '0')}`;
    }
    generateRandomPassword() {
      const length = 16;
      const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
      let password = '';
    
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
    
      return password;
    }

     getCurrentDate = () => {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0'); // Get day and pad with 0 if needed
      const mm = String(today.getMonth() + 1).padStart(2, '0'); // Get month and pad with 0 if needed
      const yyyy = today.getFullYear(); // Get full year
      return `${dd}-${mm}-${yyyy}`; // Return in yyyy-mm-dd format for input[type=date]
    };
  }


