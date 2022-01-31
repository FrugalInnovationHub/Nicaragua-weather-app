var UserProfile = (function() {
    var number = "";
    var mainAdmin = '';
    var genUser = '';
  
    var getNumber = function() {
      return number;    // Or pull this from cookie/localStorage
    };
  
    var setNumber = function(num) {
      number = num;     
      // Also set this in cookie/localStorage
    };

    var getMainAdmin = function() {
      return mainAdmin;
    };

    var setMainAdmin = function(num) {
      mainAdmin = num;
    };

    var getGenUser = function() {
      return genUser;
    };

    var setGenUser = function(num) {
      genUser = num;
    };
  
    return {
      getNumber: getNumber,
      setNumber: setNumber,
      getMainAdmin: getMainAdmin,
      setMainAdmin: setMainAdmin,
      getGenUser: getGenUser,
      setGenUser: setGenUser,
    }
  
})();
  
export default UserProfile;