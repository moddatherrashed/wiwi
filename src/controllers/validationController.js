let ValidationController = {
    "EMAIL_VALIDATOR": (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        return reg.test(email) === true
    },
    "MOBILE_NUMBER_VALIDATOR": (mobile_number) => {
        let company_code = mobile_number.substring(0, 3)
        let company_Code_Ok = company_code === "079" || company_code === "078" || company_code === "077" ? true : false
        if (company_Code_Ok === true) {
            return mobile_number.length === 10
        }
        return false
    },
    "PASSWORD_VALIDATOR": (pwd, confirm_pwd) => {
        if (pwd !== '') {
            return pwd === confirm_pwd
        }
        return false
    }
}

module.exports = ValidationController