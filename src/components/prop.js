//card inputs
export const inputsForLoginCard = [
      { type: 'text', placeholder: 'Username', icon: 'PersonIcon',id:"userN" },
      { type: 'password', placeholder: 'Password', icon: 'LockIcon',id:"userPass" }
    ];
export const inputsForSignupCard = [
      { type: 'text', placeholder: 'Username', icon: 'PersonIcon',id:"userN2"},
      { type: 'email', placeholder: 'Email', icon: 'EmailIcon',id:"userE"},
      { type: 'password', placeholder: 'Password', icon: 'LockIcon',id:"userPass2"}
];
//detailsCard inputs
export const inputsForLoginDetailsCard = {
      id:"login_details",
      title:"Welcome Back!",
      text:"Enter your Username and Password to continue",
      btn_text:"SIGN UP",
      btn_class:"su"
};
export const inputsForSignupDetailsCard = {
      id:"sign_up_details",
      title:"Hello, Friend!",
      text:"Enter your personal details and start journey with us",
      btn_text:"LOGIN",
      btn_class:"ln"
};

//card buttons inputs 
export const loginButton = { name: "Login",id:"LI" };
export const signupButton = { name: "Sign Up", id:"SU"};
