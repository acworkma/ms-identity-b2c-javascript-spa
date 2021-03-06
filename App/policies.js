/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_FHIRDevPortal_signup",
        forgotPassword: "b2c_1_reset",
        editProfile: "B2C_1_FHIRDevPortal_profile_editing"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://FHIRDevPortal.b2clogin.com/FHIRDevPortal.onmicrosoft.com/B2C_1_FHIRDevPortal_signup",
        },
        forgotPassword: {
            authority: "https://FHIRDevPortal.b2clogin.com/FHIRDevPortal.onmicrosoft.com/B2C_1_FHIRDevPortal_passwordreset",
        },
        editProfile: {
            authority: "https://FHIRDevPortal.b2clogin.com/FHIRDevPortal.onmicrosoft.com/B2C_1_FHIRDevPortal_profile_editing"
        }
    },
    authorityDomain: "FHIRDevPortal.b2clogin.com"
}